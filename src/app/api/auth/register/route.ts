import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/auth";
import { getSecuritySettings } from "@/lib/security-settings";
import { validatePasswordComplexity, recordPasswordHistory } from "@/lib/password-policy";

const schema = z.object({
  tenantName: z.string().min(2),
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(1),
});

const DIACRITICS_REGEX = new RegExp("[̀-ͯ]", "g");

function slugify(value: string): string {
  return (
    value
      .toLowerCase()
      .normalize("NFD")
      .replace(DIACRITICS_REGEX, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || "tenant"
  );
}

export async function POST(req: NextRequest) {
  const body = schema.safeParse(await req.json());
  if (!body.success) {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }
  const { tenantName, name, email, password } = body.data;

  const baseSlug = slugify(tenantName);
  let slug = baseSlug;
  let attempt = 0;
  while (await prisma.tenant.findUnique({ where: { slug } })) {
    attempt += 1;
    slug = `${baseSlug}-${attempt}`;
  }

  const tenant = await prisma.tenant.create({ data: { name: tenantName, slug } });
  const settings = await getSecuritySettings(tenant.id); // creates defaults for the new tenant

  const validation = validatePasswordComplexity(password, settings);
  if (!validation.valid) {
    await prisma.tenant.delete({ where: { id: tenant.id } });
    return NextResponse.json({ error: "Senha não atende à política.", details: validation.errors }, { status: 400 });
  }

  const passwordHash = await hashPassword(password);
  const user = await prisma.user.create({
    data: { tenantId: tenant.id, name, email, passwordHash, role: "ADMIN" },
  });
  await recordPasswordHistory(user.id, passwordHash);

  return NextResponse.json({ ok: true });
}
