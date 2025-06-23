import React from 'react';
import Header from './Header';

const Informacoes = () => {
  return (
    <section id="informacoes" className="relative w-full min-h-screen bg-[#7A7A7A] text-white flex flex-col">
      {/* Header fixo */}
      <Header />

      {/* Título */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-16 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-serif uppercase">
          INFORMAÇÕES SOBRE
        </h2>
        <h3 className="text-2xl md:text-3xl italic font-black mt-2">
          O Grande Dia
        </h3>
      </div>

      {/* Seção Nosso Casamento */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-16 py-12 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-0">
        <div className="bg-[#7A7A7A] text-white md:w-1/2 flex flex-col items-center md:items-start px-6 py-12">
          <h4 className="text-2xl font-serif mb-4 text-center md:text-left">Nosso Casamento</h4>
          <div className="border-b border-white w-12 mb-6"></div>
          <p className="mb-2 text-center md:text-left">Dia 13 de Setembro de 2025</p>
          <p className="mb-2 text-center md:text-left">Av. Clóvis Arrais Maia, 6645 - Antonio Diogo, Fortaleza - CE</p>
          <p className="mb-2 text-center md:text-left">A realizar-se às 15:30</p>
          <p className="mb-2 text-center md:text-left">Instagram do local - <a href="https://instagram.com/granroyal" target="_blank" rel="noopener noreferrer" className="underline"> @granroyal</a></p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/informacoes-nosso-casamento.jpg"
            alt="Nosso Casamento"
            className="w-full h-auto object-cover rounded"
          />
        </div>
      </div>

      {/* Seção Mapas & Como Chegar */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-16 py-12 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-0">
        <div className="md:w-1/2 order-2 md:order-1">
          <img
            src="/informacoes-mapas-como-chegar.jpg"
            alt="Mapas e Como Chegar"
            className="w-full h-auto object-cover rounded"
          />
        </div>
        <div className="bg-[#7A7A7A] text-white md:w-1/2 flex flex-col items-center md:items-start px-6 py-12 order-1 md:order-2">
          <h4 className="text-2xl font-serif mb-4 text-center md:text-left">Mapas & Como Chegar</h4>
          <div className="border-b border-white w-12 mb-6"></div>
          <p className="mb-2 text-center md:text-left">
            Disponível no Google Maps - <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="underline">ACESSAR</a>
          </p>
          <p className="mb-2 text-center md:text-left">
            Disponível no Waze - <a href="https://waze.com" target="_blank" rel="noopener noreferrer" className="underline">ACESSAR</a>
          </p>
        </div>
      </div>

      {/* Seção Dress Code */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-16 py-12 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-0">
        <div className="bg-[#7A7A7A] text-white md:w-1/2 flex flex-col items-center md:items-start px-6 py-12">
          <h4 className="text-2xl font-serif mb-4 text-center md:text-left">Dress Code</h4>
          <div className="border-b border-white w-12 mb-6"></div>
          <p className="mb-4 text-center md:text-left">
            Para tornar este momento ainda mais especial, sugerimos o traje passeio completo.
          </p>
          <p className="mb-2 text-center md:text-left">
            Para eles: terno escuro com camisa social, gravata e sapato social.
          </p>
          <p className="mb-4 text-center md:text-left">
            Para elas: vestido longo ou curto sofisticado, salto e acessórios elegantes.
          </p>
          <p className="text-center md:text-left">
            Queremos que todos se sintam confortáveis, mas também à altura da celebração que preparamos com tanto carinho.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/informacoes-dress-code.jpg"
            alt="Dress Code"
            className="w-full h-auto object-cover rounded"
          />
        </div>
      </div>

      {/* Rodapé */}
      <footer className="text-center py-3 bg-black text-white text-sm border-t border-white mt-auto">
        2025 - Todos os direitos reservados.
      </footer>
    </section>
  );
};

export default Informacoes;
