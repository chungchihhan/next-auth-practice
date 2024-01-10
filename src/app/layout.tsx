import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import AuthProvider from "@/app/context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <nav className="bg-blue-300 p-4">
            <ul className="flex justify-evenly text-2xl font-bold">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/api/auth/signin">Sign In</Link>
              </li>
              <li>
                <Link href="/api/auth/signout">Sign Out</Link>
              </li>
              <li>
                <Link href="/server">Server</Link>
              </li>
              <li>
                <Link href="/client">Client</Link>
              </li>
              <li>
                <Link href="/extra">Extra</Link>
              </li>
            </ul>
          </nav>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
