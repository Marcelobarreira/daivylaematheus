import React from "react";

const InfoSections = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Sobre a Cerimônia */}
      <div className="flex-1 h-[450px] md:h-[550px] lg:h-[600px] flex flex-col items-center justify-center bg-neutral-700 text-white px-4 py-6">
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-2">
          Sobre a<br />Cerimônia
        </h2>
        <div className="text-center mb-4 text-sm md:text-base">
          <div>Gran Royal, Fortaleza - CE</div>
          <div>13.09.25</div>
          <div>15:30</div>
        </div>
        <a
          href="/informacoes"
          className="px-6 py-2 border border-white rounded-full text-sm md:text-base transition hover:bg-white hover:text-neutral-700"
        >
          Mais informações
        </a>
      </div>

      {/* Confirme Presença */}
      <div className="flex-1 h-[450px] md:h-[550px] lg:h-[600px] flex flex-col items-center justify-center bg-black text-white px-4 py-6">
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-2">
          Confirme<br />Presença
        </h2>
        <div className="text-center mb-4 text-sm md:text-base">
          Sua presença é essencial para nós. Não se esqueça de confirmar!
        </div>
        <a
          href="/rsvp"
          className="px-6 py-2 border border-white rounded-full text-sm md:text-base transition hover:bg-white hover:text-black"
        >
          RSVP
        </a>
      </div>

      {/* Sugestão de Presentes */}
      <div className="flex-1 h-[450px] md:h-[550px] lg:h-[600px] flex flex-col items-center justify-center bg-neutral-300 text-white px-4 py-6">
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-2">
          Sugestão de<br />Presentes
        </h2>
        <div className="text-center mb-4 text-sm md:text-base">
          Presentes? Fica a vontade..
        </div>
        <a
          href="/presentes"
          className="px-6 py-2 border border-white rounded-full text-sm md:text-base transition hover:bg-white hover:text-neutral-300"
        >
          Mais informações
        </a>
      </div>
    </div>
  );
};

export default InfoSections;
