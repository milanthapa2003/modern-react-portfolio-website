import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {


  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    const themes = {
      light: {
        "--bg-color": "#fff",
        "--text-color": "#000",
        "--nav-bg": "#f8f9fa", 
        "--btn-bg": "#007bff",
        "--btn-text": "#fff",

      },
      dark: {
        "--bg-color": "#121212",
        "--text-color": "#fff",
        "--nav-bg": "#222222", 
        "--btn-bg": "#17a2b8",
        "--btn-text": "#000",

      },
    };

    Object.entries(themes[theme]).forEach(([key, value]) =>
      document.documentElement.style.setProperty(key, value)
    );
  }, [theme]);

  const navLinks = [
    { path: "/", label: "Home"  },
    { path: "/about", label: "About" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`navbar ${theme}`}>
      <div className="logo">
        <Link to="/" onClick={() => setMenuOpen(false)}>Milan</Link>
      </div>

      {/* Navigation Menu */}
      <div className={`nav-menue ${menuOpen ? "open" : ""}`}>
        <ul>
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={location.pathname === path ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Theme Toggle */}
      <div className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
    </nav>
  );
};

export default Navbar;
