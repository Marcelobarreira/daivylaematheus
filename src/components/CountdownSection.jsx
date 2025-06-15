import React, { useEffect, useState } from 'react';

const CountdownSection = () => {
  const targetDate = new Date('2025-09-13T00:00:00');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
   <section
  className="relative h-[80vh] bg-cover text-white overflow-hidden"
  style={{
    backgroundImage: "url('/diassection.jpg')",
    backgroundPosition: 'center 30%',
    filter: 'grayscale(100%)',
  }}
>

      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Contagem centralizada mais acima */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10 text-center">
        <div className="text-4xl md:text-6xl font-semibold flex gap-4 justify-center">
          <div>{String(timeLeft.days).padStart(2, '0')}</div>
          <div>:</div>
          <div>{String(timeLeft.hours).padStart(2, '0')}</div>
          <div>:</div>
          <div>{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div>:</div>
          <div>{String(timeLeft.seconds).padStart(2, '0')}</div>
        </div>
        <div className="mt-2 text-sm md:text-base flex justify-center gap-12 font-light">
          <span>Dias</span>
          <span>Horas</span>
          <span>Minutos</span>
          <span>Segundos</span>
        </div>
      </div>

 {/* Frase como verso - mais centralizada horizontalmente */}
<div className="absolute bottom-16 right-[15%] max-w-sm z-10 text-white font-greatvibes text-[37px] leading-relaxed text-right">
  <p className="whitespace-pre-line">
    “Deus mudou o teu{"\n"}
    caminho até juntares com o{"\n"}
    meu e guardou a tua vida{"\n"}
    separando-a para mim.”
  </p>
</div>

{/* Referência rotacionada à esquerda - mais centralizada horizontalmente */}
<div className="absolute bottom-44 left-[18.8%] transform -rotate-90 text-white italic tracking-wider font-greatvibes text-[37px] z-10">
  (Rute 1:6)
</div>

    </section>
  );
};

export default CountdownSection;
