import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import WhatsAppButton from "@/components/whatsapp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nábytek Jantar",
  description: "Truhlářství Jantar",
  icons: {
    icon: "/logo-black.png"
  },
  applicationName: "Nábytek Jantar",
  generator: "Next.ts",
  authors: [{name: "Adam Hitzger"}, {name: "Josef Myšička"}],
  keywords: [
     "Truhlářství Jantar", "Truhlářství Havlíčkův Brod"
  ],
creator: "Adam Hitzger",
        publisher: "Adam Hitzger",
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
          },
openGraph: {
  title: `Nábytek Jantar`,
  description: "Truhlářství a nábytek Jantar",
  url: `https://www.jantar-nabytek.cz/`,
  siteName: "Nábytek Jantar",
  locale: "cs_CZ",
  type: "website",
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${inter.variable} antialiased flex flex-col min-h-screen gap-8`}
      >
        <Navbar/>
        {children}
        <WhatsAppButton/>
        <Footer/>
        <Toaster/>
      </body>
    </html>
  );
}
