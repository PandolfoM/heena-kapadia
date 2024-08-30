import type { Metadata } from "next";
import "./globals.css";
import { raleway } from "./utils/fonts";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { MapProvider } from "./providers/map-provider";

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
        className={`${raleway.className} h-full w-full m-0 p-0 overflow-hidden flex flex-col relative bg-white dark:bg-secondary dark:text-white`}>
        <Navbar />
        <MapProvider>
          <main className="h-full overflow-y-auto pt-[75px] flex-grow">
            {children}
            <Footer />
          </main>
        </MapProvider>
      </body>
    </html>
  );
}
