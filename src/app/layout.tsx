import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import { GeistSans } from "geist/font/sans";
import { TopNav } from "./_components/topnav";

export const metadata = {
  title: "T3 Gallery",
  description: "Generated by Nick",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en" className={`${GeistSans.variable} flex flex-col gap-4`}>
      <body>
        <div className="w-full">
         <TopNav/>
        </div>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
