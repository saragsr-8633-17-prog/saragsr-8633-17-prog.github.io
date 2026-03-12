import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { StarburstIcon } from "./StarburstIcon";

const NAV_ITEMS = [
  { label: "WORK", path: "/work" },
  { label: "BLOG", path: "/blog" },
  { label: "ABOUT", path: "/about" },
  { label: "CONTACT", path: "/contact" },
];

export function Layout() {
  const [topIconHover, setTopIconHover] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (path: string, label: string) => {
    if (label === "WORK") return location.pathname === "/work";
    if (label === "ABOUT") return location.pathname === "/about";
    if (label === "BLOG") return location.pathname.startsWith("/blog");
    if (label === "CONTACT") return location.pathname === "/contact";
    return false;
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col font-['Montserrat',sans-serif] m-[0px]">
      {/* Header */}
      <div className="relative z-50 flex items-center justify-between w-full px-5 md:px-16 lg:px-6 pt-4 mb-12 md:mb-[128px]">
        {/* Top Left Starburst */}
        <Link
          to="/"
          className="cursor-pointer shrink-0"
          onMouseEnter={() => setTopIconHover(true)}
          onMouseLeave={() => setTopIconHover(false)}
        >
          <StarburstIcon color="black" size={32} rotate={topIconHover} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-col items-end font-['Montserrat',sans-serif]">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              style={{
                fontSize: "14px",
                lineHeight: "18px",
                fontWeight: isActive(item.path, item.label) ? 800 : 600,
                color:
                  isActive(item.path, item.label)
                    ? "#000000"
                    : hoveredNav === item.label
                    ? "#000000"
                    : "#a3a3a3",
                transition: "color 0.3s ease",
                textTransform: "uppercase" as const,
                letterSpacing: "0.05em",
              }}
              onMouseEnter={() => setHoveredNav(item.label)}
              onMouseLeave={() => setHoveredNav(null)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden cursor-pointer relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-[6px] overflow-visible shrink-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-[2px] bg-[#1a1a1a] transition-all duration-300 origin-center"
            style={{
              transform: menuOpen
                ? "rotate(45deg) translateY(4px)"
                : "none",
            }}
          />
          <span
            className="block w-6 h-[2px] bg-[#1a1a1a] transition-all duration-300 origin-center"
            style={{
              opacity: menuOpen ? 0 : 1,
              transform: menuOpen ? "scaleX(0)" : "scaleX(1)",
            }}
          />
          <span
            className="block w-6 h-[2px] bg-[#1a1a1a] transition-all duration-300 origin-center"
            style={{
              transform: menuOpen
                ? "rotate(-45deg) translateY(-4px)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className="md:hidden fixed inset-0 z-40 bg-[#ffffff] flex flex-col items-center justify-center transition-all duration-400"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        <nav className="flex flex-col items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="transition-colors duration-300"
              style={{
                fontSize: "32px",
                fontWeight: isActive(item.path, item.label) ? 800 : 600,
                color: isActive(item.path, item.label)
                  ? "#000000"
                  : "#a3a3a3",
                textTransform: "uppercase" as const,
                letterSpacing: "0.08em",
                lineHeight: 1.4,
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Page Content */}
      <Outlet />
    </div>
  );
}