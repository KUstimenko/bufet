
import React from 'react';
import type { MenuItemData } from '../types';

interface MenuItemProps {
  item: MenuItemData;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <article className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-yellow-500 transition-all duration-300 flex flex-col h-full">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center text-2xl">
          {item.icon}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-100 flex-grow">
          {item.name}
        </h3>
        <p className="text-2xl font-bold text-yellow-400 mt-2 self-end">
          {item.price}
        </p>
      </div>
    </article>
  );
};
