import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AudioToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [visible, setVisible] = useState(true);
  const audioRef = useRef(null);
  const location = useLocation();

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  // Oculta botão ao scrollar
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pausa a música apenas na página /rsvp
  useEffect(() => {
    const isRSVP = location.pathname === '/rsvp';
    if (audioRef.current) {
      if (isRSVP) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [location.pathname]);

  return (
    <>
      {/* Botão visível apenas se não estiver na /rsvp */}
      {location.pathname !== '/rsvp' && (
        <div
          onClick={toggleAudio}
          className={`fixed top-[85vh] left-1/2 -translate-x-1/2 z-50 cursor-pointer transition-opacity duration-500 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isPlaying ? (
              <path
                d="M20.6667 11.6693C21.5321 12.8233 22 14.2268 22 15.6693C22 17.1118 21.5321 18.5153 20.6667 19.6693M25.152 24.1546C26.2663 23.0403 27.1502 21.7175 27.7533 20.2615C28.3564 18.8056 28.6668 17.2452 28.6668 15.6693C28.6668 14.0934 28.3564 12.533 27.7533 11.0771C27.1502 9.62116 26.2663 8.29828 25.152 7.18397M14 5.93864C13.9997 5.75292 13.9445 5.57145 13.8412 5.41712C13.7378 5.26278 13.5911 5.14251 13.4195 5.07148C13.2479 5.00044 13.0592 4.98183 12.877 5.01799C12.6948 5.05415 12.5275 5.14345 12.396 5.27464L7.884 9.78531C7.70987 9.96048 7.50271 10.0993 7.27452 10.1939C7.04634 10.2884 6.80166 10.3367 6.55467 10.336H3.33333C2.97971 10.336 2.64057 10.4765 2.39052 10.7265C2.14048 10.9765 2 11.3157 2 11.6693V19.6693C2 20.0229 2.14048 20.3621 2.39052 20.6121C2.64057 20.8622 2.97971 21.0026 3.33333 21.0026H6.55467C6.80166 21.0019 7.04634 21.0502 7.27452 21.1447C7.50271 21.2393 7.70987 21.3781 7.884 21.5533L12.3947 26.0653C12.5261 26.197 12.6937 26.2868 12.8763 26.3231C13.0588 26.3595 13.248 26.3409 13.4199 26.2697C13.5918 26.1984 13.7387 26.0777 13.842 25.9229C13.9453 25.7681 14.0003 25.5861 14 25.4V5.93864Z"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <>
                <path
                  d="M29.3333 12.0001L21.3333 20.0001M21.3333 12.0001L29.3333 20.0001"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.6666 6.26945V25.7308L8.55063 21.1161H3.99996V11.6668H8.55063L14.6666 6.26945Z"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </>
            )}
          </svg>
        </div>
      )}

      <audio ref={audioRef} loop src="/musica.mp3" />
    </>
  );
};

export default AudioToggle;
