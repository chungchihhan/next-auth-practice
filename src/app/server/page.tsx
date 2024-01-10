import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/option";

export default async function ServerPage() {
  const session = await getServerSession(options);

  if (!session) {
    //add callbackUrl so that after login will redirect to this page
    redirect("/api/auth/signin?callbackUrl=/server");
  }
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex text-3xl self-center">user information</div>
        <div className="flex flex-col items-center content-center">
          <img src={session?.user?.image ?? ""} alt="" className="w-20" />
          <h1>{session?.user?.name}</h1>
          <h1>{session?.user?.email}</h1>
          {/* <h1>{session?.user?.image}</h1> */}
        </div>
      </div>
    </div>
  );
}
