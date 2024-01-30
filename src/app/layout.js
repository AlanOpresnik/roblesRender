"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "@/components/Footer/Footer";
import WspLogo from "@/components/WspLogo/WspLogo";


// Create the Inter font instance
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <Navbar/>
          {children}
          <WspLogo/>
          <Footer/>
        </NextUIProvider>
      </body>
    </html>
  );
}
