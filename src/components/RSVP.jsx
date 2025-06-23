import React from 'react';
import Header from './Header';

const RSVP = () => {
  return (
    <section className="w-full bg-[#2a271c] font-['Instrument_Serif'] text-[#A19C90]">
      <Header withBackground />

      <div className="flex flex-col md:flex-row w-full min-h-screen">
        {/* Video Section */}
        <div className="w-full md:w-1/2 h-[300px] md:h-screen flex items-center justify-center mt-[100px] md:mt-0 px-4 md:px-0">

          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="/DM 💍 2.mov"
              autoPlay
              loop
              playsInline
            >
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 h-auto md:h-screen flex flex-col items-center justify-center text-center md:text-left px-4 md:px-12 py-8 md:py-0">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            "RÉPONDEZ S'IL <br /> VOUS PLAÎT"
          </h2>

          <div className="relative mb-8">
            <div
              className="text-5xl md:text-6xl"
              style={{ fontFamily: '"Great Vibes", cursive', color: '#A19C90' }}
            >
              Rsvp
            </div>
          </div>

          <p className="text-lg mb-6">
            Que em português significa<br />
            "Responda, por favor".
          </p>

          <p className="text-lg max-w-md">
            Nossa equipe de assessoria entrará em contato para confirmar sua presença, 
            pedimos por gentileza que confirme diretamente com eles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
