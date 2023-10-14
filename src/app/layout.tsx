import Header from "@/component/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import Footer from "@/component/Footer";

const Sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Kys blog",
    template: "Kys blog | %s",
  },
  description: "Take a look at kys' story",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={Sans.className}>
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        {" "}
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
