import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-screen-2xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between px-6 md:px-16 py-4 md:py-6 gap-4">
        {/* Logo */}
        <img src="/DM-logo.avif" alt="Logo DM" className="h-10 object-contain" />

        {/* Menu central */}
        <nav className="hidden md:flex gap-10 lg:gap-20 text-white text-sm font-large">
          <a href="#inicio" className="hover:opacity-80 transition">Início</a>
          <a href="#presentes" className="hover:opacity-80 transition">Presentes</a>
          <a href="#informacoes" className="hover:opacity-80 transition">Informações</a>
        </nav>

        {/* RSVP */}
        <a
          href="#rsvp"
          className="border border-white text-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition"
        >
          RSVP
        </a>
      </div>
    </header>
  );
};

export default Header;
