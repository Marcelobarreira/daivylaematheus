import React from "react";

const HistoriaSection = () => {
  return (
    <section className="w-full flex justify-center items-center py-12 bg-white">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8 px-4">
        {/* Imagem Esquerda */}
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <img
            src="/mainfoto.jpg"
            alt="Casal se beijando"
            className="w-[250px] h-[320px] md:w-[350px] md:h-[450px] object-cover rounded"
          />
        </div>

        {/* Centro - Texto */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-2 text-center md:text-left">
            Junte-se a nós
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif font-light mb-2 leading-tight text-center md:text-left">
            nessa jornada de <br className="hidden md:block" />
            alegria, graça e
          </h3>
          <span className="text-3xl md:text-4xl italic font-serif font-light text-gray-800 mb-4 block text-center md:text-left">
            amor
          </span>

          <div className="text-sm md:text-base text-justify text-gray-700 font-light space-y-4">
            <p>
              Há 6 anos, nossos caminhos se cruzaram e, desde então, nunca mais andamos sozinhos. Juntos, construímos uma história repleta de amor, companheirismo e superação. Nosso maior presente chegou há 5 anos, com o nascimento do nosso filho, que trouxe ainda mais sentido e luz às nossas vidas.
            </p>
            <p>
              Enfrentamos desafios, crescemos com cada dificuldade e celebramos cada pequena vitória. Hoje, com o coração cheio de gratidão, estamos prontos para viver um dos momentos mais sonhados: celebrar oficialmente o nosso amor ao lado de quem mais amamos.
            </p>
            <p>
              Este casamento é mais do que uma cerimônia — é a celebração de uma história real, construída com base em respeito, afeto e resiliência. E estamos muito felizes por poder compartilhar esse dia tão especial com vocês.
            </p>
          </div>
        </div>

        {/* Imagem Direita */}
        <div className="flex-shrink-0 flex justify-center md:items-end">
          <img
            src="/diassection.jpg"
            alt="Casal se beijando 2"
            className="w-[250px] h-[180px] md:w-[350px] md:h-[250px] object-cover rounded grayscale"
          />
        </div>
      </div>
    </section>
  );
};

export default HistoriaSection;
