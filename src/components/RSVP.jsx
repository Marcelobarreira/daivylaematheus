import React from 'react';
import Header from './Header';

const RSVP = () => {
  return (
    <section className="w-full py-16 bg-white">
      <Header withBackground/>
      <div className="container mx-auto px-4 mt-36">
        <div className="flex flex-col md:flex-row items-center">
          {/* Video Section - Half width on desktop, full width on mobile */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative w-full h-0 pb-[100%] md:pb-[75%] rounded-lg overflow-hidden">
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
          
          {/* Text Section - Half width on desktop, full width on mobile */}
          <div className="w-full md:w-1/2 md:pl-12 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
              "RÉPONDEZ S'IL <br /> VOUS PLAÎT"
            </h2>
            
            <div className="font-greatvibes text-5xl md:text-6xl text-gray-700 mb-8">
              Rsvp
            </div>
            
            <p className="text-lg text-gray-600 mb-6">
              Que em português significa<br />
              "Responda, por favor".
            </p>
            
            <p className="text-lg text-gray-600 max-w-md">
              Nossa equipe de assessoria entrará em contato para confirmar sua presença, 
              pedimos por gentileza que confirme diretamente com eles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
