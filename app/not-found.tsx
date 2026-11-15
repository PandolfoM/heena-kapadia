import { Link } from "react-router";
import { nunitosans } from "./utils/fonts";

export default function NotFound() {
  return (
    <section className="page px-5 flex flex-col items-center gap-5 text-center text-primary">
      <h1 className={`${nunitosans.className} text-xl`}>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="underline hover:no-underline">
        Return home
      </Link>
    </section>
  );
}
