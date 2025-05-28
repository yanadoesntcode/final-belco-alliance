import type { Metadata } from "next";
import "../styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Choose weights you need
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Belco Alliance",
  description: "Aliance",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overscroll-none" >
        <div className="bg-beige" ></div>
        <NavBar/>


        <div className="my-[7rem] font-[Raleway]" >{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
