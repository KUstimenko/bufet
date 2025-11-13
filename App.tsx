import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MenuSlide } from './components/MenuSlide';
import { MENU_DATA } from './constants';

const SLIDE_INTERVAL = 10000; // 10 seconds

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        setPreviousSlide(prev);
        return (prev + 1) % MENU_DATA.length;
      });
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col h-screen font-sans bg-black text-white antialiased overflow-hidden">
      <Header />
      <main className="flex-grow flex flex-col overflow-hidden">
        <div className="flex-grow relative slide-container">
          {MENU_DATA.map((category, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''} ${
                index === previousSlide ? 'previous' : ''
              }`}
            >
              <MenuSlide category={category} />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center py-4">
          {MENU_DATA.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full mx-2 transition-all duration-300 ${
                currentSlide === index ? 'bg-yellow-500 scale-125' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
