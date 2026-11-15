import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// Wraps every page. The page's <head> (title, share tags, icons) is static,
// in index.html.
export default function RootLayout() {
  const main = useRef<HTMLElement>(null);
  const { pathname } = useLocation();

  // Pages scroll inside <main>, not the window, so start each page at the top.
  useEffect(() => {
    main.current?.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main ref={main} className="h-full overflow-y-auto grow">
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
