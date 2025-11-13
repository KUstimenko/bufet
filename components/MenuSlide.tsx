import React from 'react';
import type { MenuCategory } from '../types';
import { MenuItem } from './MenuItem';

interface MenuSlideProps {
  category: MenuCategory;
}

export const MenuSlide: React.FC<MenuSlideProps> = ({ category }) => {
  return (
    <section className="h-full w-full p-4 md:p-8 flex flex-col overflow-y-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-yellow-500 tracking-wide uppercase border-b-2 border-gray-700 pb-4">
        {category.title}
      </h2>
      <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 content-start">
        {category.items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};
