import React from "react";

const InfoSections = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Sobre a Cerimônia */}
      <div className="flex-1 flex flex-col items-center justify-center bg-neutral-700 text-white py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-4">Sobre a<br />Cerimônia</h2>
        <div className="text-center mb-6">
          <div className="text-lg">Gran Royal, Fortaleza - CE</div>
          <div className="text-base">13.09.25</div>
          <div className="text-base">15:30</div>
        </div>
        <a
          href="#cerimonia"
          className="mt-4 px-8 py-2 border border-white rounded-full text-base transition hover:bg-white hover:text-neutral-700"
        >
          Mais informações
        </a>
      </div>
      {/* Confirme Presença */}
      <div className="flex-1 flex flex-col items-center justify-center bg-black text-white py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-4">Confirme<br />Presença</h2>
        <div className="text-center mb-6 text-base">
          Sua presença é essencial para nós. Não se esqueça de confirmar!
        </div>
        <a
          href="#rsvp"
          className="mt-4 px-8 py-2 border border-white rounded-full text-base transition hover:bg-white hover:text-black"
        >
          RSVP
        </a>
      </div>
      {/* Sugestão de Presentes */}
      <div className="flex-1 flex flex-col items-center justify-center bg-neutral-300 text-white py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 text-white">Sugestão de<br />Presentes</h2>
        <div className="text-center mb-6 text-base text-white">
          Presentes? Fica a vontade..
        </div>
        <a
          href="#presentes"
          className="mt-4 px-8 py-2 border border-white rounded-full text-base transition hover:bg-white hover:text-neutral-300"
        >
          Mais informações
        </a>
      </div>
    </div>
  );
};

export default InfoSections;
