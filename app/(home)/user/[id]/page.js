import UserProfile from "@/components/user/UserProfile";

export default async function User({ params }) {
  const id = (await params).id;
  return <UserProfile />;
}
