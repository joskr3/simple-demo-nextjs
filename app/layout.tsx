import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"
import Myheader from "../components/custom/header";
import Footer from "../components/custom/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Mi app de ecommerce",
  description: "Una aplicacion sencilla de ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          " flex flex-col h-dvh justify-between  bg-background font-sans antialiased p-3",
          fontSans.variable
        )}
      >
        <Myheader />
        <main className="my-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
