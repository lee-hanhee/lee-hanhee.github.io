import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useTheme from "../hooks/useTheme";

const Layout = () => {
  const { theme } = useTheme();

  useEffect(() => {
    // Add class to body for background styling only
    if (theme === "dark") {
      document.body.classList.add("bg-gray-950");
      document.body.classList.remove("bg-gray-50");
    } else {
      document.body.classList.add("bg-gray-50");
      document.body.classList.remove("bg-gray-950");
    }
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
