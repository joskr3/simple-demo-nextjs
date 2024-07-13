import type { Metadata } from "next";
import { Inter, Roboto_Mono, Aclonica } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"
import Myheader from "../components/custom/header";
import Footer from "../components/custom/footer";
import { ContextoProvider } from "@/context/ContextoTema";
import { AuthProvider } from "@/context/ContextoAuth";
import {
  ClerkProvider
} from '@clerk/nextjs'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const aclonica = Aclonica({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-aclonica'
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
    <ClerkProvider>
      <AuthProvider>
        <ContextoProvider>
          <html lang="en" >
            <body
              className={cn(
                "min-h-dvh max-w-full w-full overflow-x-hidden bg-background font-sans antialiased relative flex flex-col p-3", `${aclonica.variable}`
              )}
            >
              <Myheader />
              {children}
              <Footer />
            </body>
          </html>
        </ContextoProvider>
      </AuthProvider>
    </ClerkProvider>
  );
}
