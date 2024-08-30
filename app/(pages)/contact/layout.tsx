import { MapProvider } from "@/app/providers/map-provider";

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MapProvider>{children}</MapProvider>;
}
