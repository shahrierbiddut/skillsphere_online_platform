import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ProfilePageView from "../components/profile/ProfilePageView";
import { AUTH_COOKIE_NAME, decodeSession } from "@/lib/authSession";

export const metadata = {
  title: "My Profile - SkillSphere"
};

async function getSessionUser() {
  const cookieStore = await cookies();
  const sessionValue = cookieStore.get(AUTH_COOKIE_NAME)?.value;

  return decodeSession(sessionValue);
}

export default async function ProfilePage() {
  const user = await getSessionUser();

  if (!user) {
    redirect("/login");
  }

  return <ProfilePageView user={user} />;
}
