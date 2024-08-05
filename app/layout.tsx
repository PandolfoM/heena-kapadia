import type { Metadata } from "next";
import "./globals.css";
import { raleway } from "./utils/fonts";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Heena Kapadia",
  description: "Law office of Heena Kapadia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body
        className={`${raleway.className} h-full w-full flex flex-col relative`}>
        <Navbar />
        <main className="h-full overflow-y-auto pt-[80px]">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
