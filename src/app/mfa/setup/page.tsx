import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { isMfaRequiredForUser } from "@/lib/mfa";
import { MfaSetupView } from "./mfa-setup-view";

export default async function MfaSetupPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  return <MfaSetupView required={isMfaRequiredForUser(session.settings, session.user.role)} />;
}
