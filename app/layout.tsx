import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"
import Myheader from "../components/custom/header";
import Footer from "../components/custom/footer";
import { ContextoProvider } from "@/context/ContextoTema";
import { AutenticacionProvider } from "@/context/ContextoAuntenticacion";

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
    <AutenticacionProvider>
      <ContextoProvider>
        <html lang="en">
          <body
            className={cn(
              "h-dvh max-w-full w-full overflow-x-hidden bg-background font-sans antialiased relative flex flex-col p-3 justify-between",
              fontSans.variable
            )}
          >
            <Myheader />
            {children}
            <Footer />
          </body>
        </html>
      </ContextoProvider>
    </AutenticacionProvider>
  );
}
