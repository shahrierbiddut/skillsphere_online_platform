import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ProfileUpdatePageView from "../../components/profile/ProfileUpdatePageView";
import { AUTH_COOKIE_NAME, decodeSession } from "@/lib/authSession";

export const metadata = {
  title: "Update Profile - SkillSphere"
};

async function getSessionUser() {
  const cookieStore = await cookies();
  const sessionValue = cookieStore.get(AUTH_COOKIE_NAME)?.value;

  return decodeSession(sessionValue);
}

export default async function ProfileUpdatePage() {
  const user = await getSessionUser();

  if (!user) {
    redirect("/login");
  }

  return <ProfileUpdatePageView user={user} />;
}
