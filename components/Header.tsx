
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-black border-b-2 border-yellow-500 shadow-lg p-4 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center text-black text-2xl font-bold mr-4">
            ШБ
          </div>
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-wider text-yellow-400">
              Меню шкільного буфету
            </h1>
            <p className="text-lg text-gray-300">Смачно щодня</p>
          </div>
        </div>
      </div>
    </header>
  );
};
