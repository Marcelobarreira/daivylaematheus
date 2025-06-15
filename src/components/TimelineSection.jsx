import React from 'react';

const timelineData = [
  { icon: '/linhatempo1.avif', date: '10.02.16', text: 'A primeira troca de olhares' },
  { icon: '/linhatempo2.avif', date: '11.04.19', text: 'O primeiro beijo' },
  { icon: '/linhatempo3.avif', date: '16.06.19', text: 'O pedido de namoro' },
  { icon: '/linhatempo4.avif', date: '25.05.20', text: 'Nascimento do Gabriel e a concretização do nosso amor' },
  { icon: '/linhatempo5.avif', date: '08.09.24', text: 'Pedido de casamento' },
  { icon: '/linhatempo6.avif', date: '15.09.25', text: 'Nosso grande dia' },
];

const TimelineSection = () => {
  return (
    <section
      className="relative overflow-visible py-16 md:min-h-[350px]"
      style={{ backgroundColor: '#bfbfbf' }}
    >
      {/* Linha decorativa visível apenas em md+ */}
      <img
        src="/linhadetalhe.avif"
        alt="Linha decorativa"
        style={{
          width: '1123px',
          height: '550px',
          top: '-200px',
          left: '400px',
          position: 'absolute',
        }}
        className="hidden md:block object-cover pointer-events-none select-none z-0"
      />

      <h2 className="text-center text-xl md:text-2xl font-serif italic text-black mb-6 relative z-10">
        Linha do Tempo
      </h2>

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10 px-4 max-w-7xl w-full">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-[160px]"
            >
              <img
                src={item.icon}
                alt=""
                className="h-10 object-contain mb-2 transition-transform hover:scale-105"
              />
              <p className="text-xs font-medium text-black">{item.date}</p>
              <p className="text-[11px] md:text-xs mt-1 text-black leading-snug">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
