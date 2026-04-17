import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Book", href: "/booking" },
];

const ease = [0.32, 0.72, 0, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="content-max flex items-center justify-between h-20">
          <Link
            to="/"
            className="flex items-center gap-2 font-display text-xl tracking-[0.1em] text-foreground"
          >
            <img src={logo} alt="DOUCES logo" className="h-12 w-auto object-contain" />
            DOUCES
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-link font-body text-[13px] uppercase tracking-[0.1em] ${
                  location.pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-50"
            aria-label="Menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease }}
              className="block w-6 h-px bg-foreground"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease }}
              className="block w-6 h-px bg-foreground"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay menu */}
      <motion.div
        initial={false}
        animate={menuOpen ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, ease }}
        className={`fixed inset-0 z-40 bg-background flex flex-col items-center justify-center ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 30 }}
              animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
            >
              <Link
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-5xl text-foreground"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </>
  );
}
