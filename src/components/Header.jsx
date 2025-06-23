import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ withBackground = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showNavLinks = !isScrolled || menuOpen;

  return (
    <motion.header
  layout
  initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeInOut" }}
  className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
  withBackground === 'white'
    ? 'bg-white text-black'
    : withBackground === 'black'
    ? 'bg-black text-white'
    : withBackground === '808080'
    ? 'bg-[#808080] text-white'
    : 'bg-transparent text-white'
}`}


>

      <motion.div
        layout
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="max-w-screen-2xl mx-auto flex items-center justify-between px-6 md:px-16 py-4 md:py-6 gap-4 text-[26px]"
        style={{ fontFamily: '"Instrument Serif", serif' }}
      >
        <Link to="/">
          <img
            src="/DM-logo.avif"
            alt="Logo DM"
            className="h-10 object-contain"
          />
        </Link>

        <AnimatePresence mode="wait">
          {showNavLinks && (
            <motion.nav
              key="nav"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="hidden md:flex gap-10 lg:gap-20 text-white"
            >
              <Link
                to="/"
                className="hover:opacity-80 transition hover:font-['Mr_De_Haviland'] hover:scale-[1.1] hover:tracking-wider"
                onClick={() => setMenuOpen(false)}
              >
                Início
              </Link>

              <Link
                to="/presentes"
                className="hover:opacity-80 transition hover:font-['Mr_De_Haviland'] hover:scale-[1.1] hover:tracking-wider"
                onClick={() => setMenuOpen(false)}
              >
                Presentes
              </Link>

              <Link
                to="/informacoes"
                className="hover:opacity-80 transition hover:font-['Mr_De_Haviland'] hover:scale-[1.1] hover:tracking-wider"
                onClick={() => setMenuOpen(false)}
              >
                Informações
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {showNavLinks && (
            <motion.div
  key="rsvp"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: 50 }}
  transition={{ duration: 0.4, ease: "easeInOut" }}
  className="hidden md:flex items-center"
>
  <div className="group flex items-center gap-x-2">
    <Link
      to="/rsvp"
      onClick={() => setMenuOpen(false)}
      className="border border-white text-white text-lg px-6 py-2 rounded-full hover:bg-white hover:text-black transition instrument-serif-regular-italic"
    >
      RSVP
    </Link>
    <span
      className="text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 instrument-serif-regular-italic"
    >
      Confirme Presença
    </span>
  </div>
</motion.div>

          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden block"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={menuOpen ? "x-icon" : "menu-icon"}
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 10 }}
              transition={{ duration: 0.25 }}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </AnimatePresence>
        </motion.button>

        <AnimatePresence mode="wait">
          {isScrolled && (
            <motion.button
              key="hamburger-button-desktop"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="hidden md:block text-white"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={menuOpen ? "x-icon-desktop" : "menu-icon-desktop"}
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 10 }}
                  transition={{ duration: 0.25 }}
                >
                  {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobilemenu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black/80 backdrop-blur-md text-white flex flex-col items-center gap-4 py-6 px-6 text-[36px]"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            <Link
              to="/"
              className="hover:opacity-80 transition hover:font-['Mr_De_Haviland'] hover:scale-[1.1] hover:tracking-wider"
              onClick={() => setMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              to="/presentes"
              className="hover:opacity-80 transition hover:font-['Mr_De_Haviland'] hover:scale-[1.1] hover:tracking-wider"
              onClick={() => setMenuOpen(false)}
            >
              Presentes
            </Link>

            <Link
              to="/informacoes"
              className="hover:opacity-80 hover:font-['Mr_De_Haviland'] transition"
              onClick={() => setMenuOpen(false)}
            >
              Informações
            </Link>
            <Link
              to="/rsvp"
              className="border border-white text-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition instrument-serif-regular-italic"
              onClick={() => setMenuOpen(false)}
            >
              RSVP
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
