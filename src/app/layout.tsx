import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Passer Blog",
  description: "It's blog by Vita Passer",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <div className='flex xl:justify-center xl:content-center xl:items-center dark:bg-haiti'>
          <div className='flex flex-col gap-y-5 md:gap-y-[30px] xl:gap-y-[50px] font-inter dark:bg-haiti dark:text-white xl:px-[30px] xl:w-[1280px] min-w-full xl:min-w-[auto]'>
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
