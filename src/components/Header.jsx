import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ withBackground = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`absolute top-0 left-0 w-full z-50 ${withBackground ? 'bg-[#7A7A7A]' : 'bg-transparent'}`}>
      <div className="max-w-screen-2xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between px-6 md:px-16 py-4 md:py-6 gap-4">
        
        <Link to="/">
          <img src="/DM-logo.avif" alt="Logo DM" className="h-10 object-contain" />
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className="hidden md:flex gap-10 lg:gap-20 text-white text-lg font-large">
          <Link to="/" className="hover:opacity-80 transition">Início</Link>
          <Link to="/presentes" className="hover:opacity-80 transition">Presentes</Link>
          <Link to="/informacoes" className="hover:opacity-80 transition">Informações</Link>
        </nav>

        <Link
          to="/rsvp"
          className="hidden md:block border border-white text-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition"
        >
          RSVP
        </Link>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-black/80 to-black/40 backdrop-blur-md text-white flex flex-col items-center gap-4 py-6 px-6 text-lg font-medium transition-all duration-300">
          <Link to="/" className="hover:opacity-80 transition" onClick={() => setMenuOpen(false)}>Início</Link>
          <Link to="/presentes" className="hover:opacity-80 transition" onClick={() => setMenuOpen(false)}>Presentes</Link>
          <Link to="/informacoes" className="hover:opacity-80 transition" onClick={() => setMenuOpen(false)}>Informações</Link>
          <Link
            to="/rsvp"
            className="border border-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition"
            onClick={() => setMenuOpen(false)}
          >
            RSVP
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
