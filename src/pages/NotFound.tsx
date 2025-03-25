
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center px-6 py-24">
        <AnimatedSection animation="fade-in" className="text-center max-w-xl">
          <h1 className="text-6xl md:text-8xl font-display font-semibold text-stone-800 mb-4">
            404
          </h1>
          <p className="text-xl text-stone-600 mb-6">
            Oops! The page you're looking for cannot be found.
          </p>
          <p className="text-stone-500 mb-8">
            The page may have been moved, deleted, or the URL might be incorrect.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-md bg-primary text-white font-medium transition-all hover:bg-primary/90"
          >
            Return to Home
          </Link>
        </AnimatedSection>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
