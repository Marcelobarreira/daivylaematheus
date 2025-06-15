import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
      style={{ backgroundImage: "url('/mainfoto.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="z-10 mt-20 px-4 w-full max-w-4xl">
        <p className="text-xs md:text-sm mb-2 tracking-widest">13.09.25</p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-semibold">
          Daivyla & Matheus
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-2xl leading-relaxed font-light whitespace-pre-line">
          “Porque o que vive em nós, não conhece o fim, não  {"\n"}teme o tempo e não se dissolve na ausência.”
        </p>
      </div>
    </section>
  );
};

export default Hero;
