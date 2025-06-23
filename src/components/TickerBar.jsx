import React from 'react';

const TickerBar = () => {
  const content = 'Daivyla & Matheus      13.09.2025';

  return (
    <div className="w-full overflow-hidden bg-black py-2">
      <div className="flex animate-marquee gap-20 whitespace-nowrap">
        {Array.from({ length: 20 }).map((_, idx) => (
          <span
            key={idx}
            className="inline-block text-white text-1xl"
            style={{ fontFamily: '"Mr De Haviland", cursive' }}
          >
            {content}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TickerBar;
