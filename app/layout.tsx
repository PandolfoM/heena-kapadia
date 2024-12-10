import type { Metadata } from "next";
import "./globals.css";
import { nunitosans } from "./utils/fonts";
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
    <html lang="en" className="h-full w-full m-0 p-0 overflow-hidden">
      <body
        className={`${nunitosans.className} h-full w-full m-0 p-0 overflow-hidden flex flex-col relative bg-[#ececec] dark:bg-secondary dark:text-white`}>
        <Navbar />
        <main className="h-full overflow-y-auto flex-grow">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
