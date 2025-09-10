import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center" style={{ backgroundColor: '#B5845E' }}>
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold gradient-primary bg-clip-text text-transparent">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-foreground">Page Not Found</h2>
        <p className="mb-6 text-lg text-muted-foreground">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 gradient-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-smooth"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
