
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Suspense } from "react"

export default function Layout() {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <main className="min-h-[80vh] max-w-7xl mx-auto px-4 py-8">
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}
