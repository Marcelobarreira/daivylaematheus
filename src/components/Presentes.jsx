import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Presentes = () => {
  const chavePix =
    '00020101021126360014br.gov.bcb.pix0114+55859812465395204000053039865802BR5917MATHEUS G TAVARES6007EUSEBIO62070503***6304E14C';

  const [copied, setCopied] = useState(false);

  const copiarChave = () => {
    navigator.clipboard.writeText(chavePix).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section
      id="presentes"
      className="min-h-screen flex flex-col relative text-white bg-black md:bg-black"
      style={{
        backgroundImage: 'url("/aaa.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0 md:bg-[#808080] md:opacity-100" />


      <Header />

      {copied && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-green-600 text-white text-sm font-medium px-4 py-2 rounded shadow-lg transition-all duration-300">
          Chave Pix copiada com sucesso!
        </div>
      )}

      <div className="flex-1 z-10 max-w-screen-2xl mx-auto px-6 md:px-16 py-32 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-lg leading-relaxed max-w-xl md:max-w-md lg:max-w-lg text-center md:text-left">
          <p className="mb-6">
            O maior presente é ter você celebrando esse momento tão especial ao nosso lado.
          </p>
          <p>
            Mas, se desejar nos presentear de alguma forma, aqui está o QR Code do nosso Pix.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 bg-white text-black p-6 rounded-xl shadow-md w-full max-w-sm">
          <div className="w-52 h-52 bg-gray-100 rounded-md flex items-center justify-center border">
            <img
              src="/qrcode.png"
              alt="QR Code Pix"
              className="w-full h-full object-contain p-2"
            />
          </div>

          <div className="text-center text-sm italic text-gray-700">
            Titular: <strong>Matheus Goncalves Tavares</strong> · Banco Inter
          </div>

          <div className="w-full flex flex-col items-center gap-2">
            <span className="text-sm font-semibold text-gray-800">CHAVE PIX (Copia e Cola)</span>
            <div className="flex items-center gap-2 justify-between bg-gray-100 border border-gray-300 rounded px-3 py-2 w-full">
              <p className="text-xs truncate w-full">{chavePix}</p>
              <button
                onClick={copiarChave}
                className="text-sm text-white bg-pink-600 hover:bg-pink-700 px-3 py-1 rounded whitespace-nowrap"
              >
                Copiar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="z-10">
        <Footer />
      </div>
    </section>
  );
};

export default Presentes;
