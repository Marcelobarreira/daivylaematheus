import React from 'react';

const timelineData = [
  { icon: '/linhatempo1.png', date: '10.02.16', text: 'A primeira\ntroca de olhares' },
  { icon: '/linhatempo2.png', date: '11.04.19', text: 'O primeiro\nbeijo' },
  { icon: '/linhatempo4.png', date: '16.06.19', text: 'O pedido de\nnamoro' },
  { icon: '/linhatempo3.png', date: '25.05.20', text: 'Nascimento do Gabriel e a\nconcretização do nosso amor' },
  { icon: '/linhatempo5.png', date: '08.09.24', text: 'Pedido de\ncasamento' },
  { icon: '/linhatempo6.png', date: '13.09.25', text: 'Nosso grande\ndia' },
];

const TimelineSection = () => {
  return (
    <section
      className="relative overflow-visible pt-8 pb-12 md:min-h-[350px]"
      style={{ backgroundColor: '#bfbfbf' }}
    >
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

      <h2 className="text-center text-xl md:text-2xl font-serif italic text-black mb-4 relative z-10">
        Linha do Tempo
      </h2>

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-3 gap-x-2 place-items-center">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-full max-w-[150px] min-h-[220px]"
            >
              <div className="h-20 w-20 flex items-center justify-center mb-2">
                <img
                  src={item.icon}
                  alt=""
                  className={`object-contain transition-transform hover:scale-105 ${
                    index === 1 || index === 3 || index === 5 
                      ? 'h-16 w-auto max-h-20' 
                      : 'h-20 w-auto max-w-20'
                  }`}
                />
              </div>
              <p
                className="text-sm md:text-base text-black"
                style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}
              >
                {item.date}
              </p>
              <p
  className="text-[11px] md:text-xs mt-1 text-black leading-snug whitespace-pre-line"
  style={{ fontFamily: '"Lora", serif', fontWeight: 400 }}
>
  {item.text}
</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
