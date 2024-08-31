export default function PracticeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="px-5 lg:px-0 lg:w-1/2 lg:m-auto">{children}</div>;
}
