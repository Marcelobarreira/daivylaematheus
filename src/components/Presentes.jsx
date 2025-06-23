import React from 'react';
import Header from './Header'; // ajuste o caminho se necessário

const Presentes = () => {
  return (
    <section id="presentes" className="relative w-full min-h-screen bg-[#7A7A7A] text-white flex flex-col">
      {/* Header fixo */}
      <Header />

      {/* Conteúdo */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-16 py-32 flex flex-col md:flex-row justify-between items-center gap-12 flex-grow">
        {/* Texto */}
        <div className="text-lg leading-relaxed max-w-xl md:max-w-md lg:max-w-lg">
          <p className="mb-6">
            O maior presente é ter você celebrando esse momento tão especial ao nosso lado.
          </p>
          <p>
            Mas, se desejar nos presentear de alguma forma, aqui está o QR Code do nosso Pix.
          </p>
        </div>

        {/* Imagem QR Code */}
        <div className="w-64 h-64 bg-black flex items-center justify-center">
          <img
            src="/edcf64bb-a31e-44f2-82ec-4ee0bfdfc4f2.png"
            alt="QR Code Pix"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Rodapé */}
      <footer className="text-center py-3 bg-black text-white text-sm border-t border-white">
        2025 - Todos os direitos reservados.
      </footer>
    </section>
  );
};

export default Presentes;
