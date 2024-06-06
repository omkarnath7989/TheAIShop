import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Variable } from "lucide-react";

const inter = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight : [ "100" , "200" , "300" , "400"],
  variable : "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "THE AI SHOP",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables : { colorPrimary : "#624cf5"}
    }}>
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  </ClerkProvider>
  );
}
