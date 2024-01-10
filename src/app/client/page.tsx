"use client";

//you must need an AuthProvider for client components to useSession

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function ClientPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
    },
  });

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/client");
  }

  return (
    <div>
      <div className="flex flex-col">
        <h1 className="self-center">this is a client page</h1>
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
