import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { mfaSetupRequired } from "@/lib/mfa";

export default async function RootPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  if (mfaSetupRequired(session.settings.mfaPolicy, session.user.mfaEnabled)) redirect("/mfa/setup");
  redirect("/home");
}
