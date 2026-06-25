import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

/** Restore scroll to top on every route change. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/**
 * App shell. The shared Footer appears everywhere except the Work index
 * (`/work`), which ends with its own large "WORKS" composition.
 */
export default function Layout() {
  const { pathname } = useLocation();
  const showFooter = pathname !== "/work";

  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      {showFooter && <Footer />}
    </>
  );
}
