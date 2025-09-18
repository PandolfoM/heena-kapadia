import type { Metadata, Viewport } from "next";
import "./globals.css";
import { nunitosans } from "./utils/fonts";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Heena Kapadia",
  description: "Law office of Heena Kapadia",
  openGraph: {
    title: "Heena Kapadia",
    description: "Law office of Heena Kapadia",
    type: "website",
    url: "https://heenakapadialaw.com/",
    siteName: "Heena Kapadia",
    locale: "en_US",
    images: [
      {
        url: "https://heenakapadialaw.com/og.png",
        width: 1200,
        height: 630,
        alt: "Heena Kapadia",
      },
    ],
  },
  twitter: {
    title: "Heena Kapadia",
    description: "Law office of Heena Kapadia",
    images: [
      {
        url: "https://heenakapadialaw.com/og.png",
        width: 1200,
        height: 630,
        alt: "Heena Kapadia",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  applicationName: "Heena Kapadia",
  appleWebApp: {
    title: "Heena Kapadia",
    statusBarStyle: "default",
    capable: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1f272d",
  colorScheme: "light",
  maximumScale: 1,
  initialScale: 1,
  width: "device-width",
  viewportFit: "cover",
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
