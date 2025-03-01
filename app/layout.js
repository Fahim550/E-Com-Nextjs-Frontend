import { Geist, Geist_Mono } from "next/font/google";
import Footer from '../app/shared/Footer';
import Navbar from '../app/shared/Navbar';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-Commerce",
  description: "create by fahim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
       <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
