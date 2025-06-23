import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const quoteWords = [
    "Porque", "o", "que", "vive", "em", "nós,", "não",
    "conhece", "o", "fim,", "não", "teme", "o", "tempo", "e",
    "não", "se", "dissolve", "na", "ausência."
  ];

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 200], [1, 0.7]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const translateY = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-white text-center px-4 font-['Mr_De_Haviland']">
      <div
        className="absolute inset-0 bg-cover scale-150 transition-transform duration-700"
        style={{
          backgroundImage: "url('/mainfoto.jpg')",
          backgroundPosition: '55% 10%'
        }}
      />
      <div className="absolute inset-0 bg-black/25 z-10" />

      <motion.div
        className="z-20 mt-20 px-4 w-full max-w-5xl"
        style={{ scale, opacity, y: translateY }}
      >
        <p className="text-2xl md:text-4xl mb-2 tracking-widest">13.09.25</p>

        <h1 className="text-6xl sm:text-7xl md:text-8xl font-serif font-semibold">
          Daivyla & Matheus
        </h1>

        <p className="mt-6 text-3xl sm:text-4xl md:text-5xl leading-relaxed font-light flex flex-wrap justify-center gap-x-3 fade-in-text">
          {quoteWords.map((word, index) => (
            <span
              key={index}
              className="inline-block opacity-0 animate-fade-in"
              style={{
                animationDelay: `${index * 0.15}s`,
                animationFillMode: 'forwards'
              }}
            >
              {word}
            </span>
          ))}
        </p>
      </motion.div>


      <style jsx="true">{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
