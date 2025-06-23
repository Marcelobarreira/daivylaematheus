import React, { useEffect, useRef, useState } from "react";

const useInView = (options) => {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return [ref, isVisible];
};

const HistoriaSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className={`w-full flex justify-center items-center py-12 bg-white transition-opacity duration-1000 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8 px-4">
        {/* Imagem Esquerda */}
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <img
            src="/fotosection1.jpg"
            alt="Casal se beijando"
            className={`w-[250px] h-[320px] md:w-[350px] md:h-[450px] object-cover rounded transition-all duration-1000 ease-in-out ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          />
        </div>

        {/* Centro - Texto */}
        <div
          className={`flex-1 flex flex-col justify-center transition-all duration-1000 ease-in-out delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className="text-3xl md:text-4xl mb-2 text-center md:text-left"
            style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600 }}
          >
            Junte-se a nós
          </h2>
          <h3
            className="text-2xl md:text-3xl mb-2 leading-tight text-center md:text-left"
            style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}
          >
            nessa jornada de <br className="hidden md:block" />
            alegria, graça e
          </h3>
          <span
            className="text-4xl md:text-6xl italic text-gray-800 mb-4 block text-center md:text-left"
            style={{ fontFamily: '"Great Vibes", cursive' }}
          >
            amor
          </span>

          <div
            className="text-sm md:text-base text-justify text-gray-800 space-y-4"
            style={{ fontFamily: '"Lora", serif', fontWeight: 400 }}
          >
            <p>
              Há 6 anos, nossos caminhos se cruzaram e, desde então, nunca mais
              andamos sozinhos. Juntos, construímos uma história repleta de amor,
              companheirismo e superação. Nosso maior presente chegou há 5 anos,
              com o nascimento do nosso filho, que trouxe ainda mais sentido e luz
              às nossas vidas.
            </p>
            <p>
              Enfrentamos desafios, crescemos com cada dificuldade e celebramos
              cada pequena vitória. Hoje, com o coração cheio de gratidão, estamos
              prontos para viver um dos momentos mais sonhados: celebrar
              oficialmente o nosso amor ao lado de quem mais amamos.
            </p>
            <p>
              Este casamento é mais do que uma cerimônia — é a celebração de uma
              história real, construída com base em respeito, afeto e resiliência.
              E estamos muito felizes por poder compartilhar esse dia tão especial
              com vocês.
            </p>
          </div>
        </div>

        {/* Imagem Direita */}
        <div className="flex-shrink-0 flex justify-center md:items-end">
          <img
            src="/fotosection2.jpg"
            alt="Casal se beijando 2"
            className={`w-[250px] h-[180px] md:w-[350px] md:h-[250px] object-cover rounded grayscale transition-all duration-1000 ease-in-out ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default HistoriaSection;
