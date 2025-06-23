import React from 'react';
import Header from './Header';

const Informacoes = () => {
  return (
    <section id="informacoes" className="relative w-full min-h-screen flex flex-col pt-[80px]">

      {/* Header fixo */}
      <Header withBackground />


      {/* Título da seção */}
      <div className="w-full bg-[#7A7A7A] text-center py-12 px-4 border-b border-black">
  <h2
    className="text-3xl md:text-4xl uppercase tracking-tight mb-1"
    style={{
      fontFamily: '"Merriweather", serif',
      color: '#FFFFFF',
    }}
  >
    INFORMAÇÕES SOBRE
  </h2>
  <h3
    className="text-3xl md:text-5xl italic font-light"
    style={{
      fontFamily: '"Great Vibes", cursive',
      color: '#000000',
    }}
  >
    O Grande Dia
  </h3>
</div>


      {/* Grid layout para as seções */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {/* Seção Nosso Casamento - Quadrante superior esquerdo */}
        <div className="bg-[#7A7A7A] text-white flex flex-col items-center justify-center py-16 px-8 md:px-16 min-h-[70vh]">
          <h2 className="text-3xl md:text-4xl font-serif mb-2 text-center">
            Nosso<br />Casamento
          </h2>
          <div className="w-24 my-6 border-b" style={{ borderColor: 'rgba(0,0,0,0.3)' }}></div>
          
          <div className="flex flex-col items-center space-y-4 text-sm md:text-base">
            <p className="text-center">Dia 13 de Setembro de 2025</p>
            
            <p className="text-center">Av. Clóvis Arrais Maia, 6645 - Antonio Diogo,<br />Fortaleza - CE</p>
            
            <div className="flex items-center justify-center gap-2 ml-8">
              <p className="text-center">A realizar-se às 15:30</p>
              <img src="/line2.png" alt="Decorativo" className="h-8" />
            </div>

            
            <p className="text-center">
              Instagram do local - <a href="https://instagram.com/granroyal" target="_blank" rel="noopener noreferrer">@granroyal</a>
            </p>
          </div>
        </div>

        {/* Imagem do local - Quadrante superior direito */}
        <div className="min-h-[50vh] bg-white">
          <img
            src="/altar.avif"
            alt="Local do Casamento"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Imagem do casal - Quadrante inferior esquerdo */}
        <div className="min-h-[70vh] bg-white">
          <img
            src="/beijotavas.avif"
            alt="Casal"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Seção Mapas & Como Chegar - Quadrante inferior direito */}
        <div className="bg-[#7A7A7A] text-white flex flex-col items-center justify-center py-16 px-8 md:px-16 min-h-[70vh]">
          <h2 className="text-3xl md:text-4xl font-serif mb-2 text-center">
            Mapas &<br />Como Chegar
          </h2>
          <div className="w-24 my-6 border-b" style={{ borderColor: 'rgba(0,0,0,0.3)' }}></div>
          <div className="flex flex-col items-center space-y-4 text-sm md:text-base">
            <p className="text-center">
              Disponível no Google Maps - <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">ACESSAR</a>
            </p>
            <p className="text-center">
              Disponível no Waze - <a href="https://waze.com" target="_blank" rel="noopener noreferrer">ACESSAR</a>
            </p>
          </div>
        </div>
      </div>

      {/* Dress Code Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {/* Seção Dress Code - Lado esquerdo */}
        <div className="bg-[#7A7A7A] text-white flex flex-col items-center justify-center py-16 px-8 md:px-16 min-h-[70vh]">
          <h2 className="text-3xl md:text-4xl font-serif mb-2 text-center">
            Dress Code
          </h2>
          <div className="w-24 my-6 border-b" style={{ borderColor: 'rgba(0,0,0,0.3)' }}></div>

          <div className="flex flex-col items-center space-y-6 text-sm md:text-base max-w-md mx-auto">
            <p className="text-center">
              Para tornar este momento ainda mais especial,<br />
              sugerimos o traje passeio completo.
            </p>
            <p className="text-center">
              Para eles: terno escuro com camisa social,<br />
              gravata e sapato social.
            </p>
            <p className="text-center">
              Para elas: vestido longo ou curto sofisticado,<br />
              salto e acessórios elegantes.
            </p>
            <p className="text-center">
              Queremos que todos se sintam confortáveis,<br />
              mas também à altura da celebração que<br />
              preparamos com tanto carinho.
            </p>
          </div>
        </div>

        {/* Imagem de flores - Lado direito */}
        <div className="min-h-[70vh] bg-white">
          <img
            src="/flores.avif"
            alt="Flores"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Informacoes;
