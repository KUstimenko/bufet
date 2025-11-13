
export interface MenuItemData {
  name: string;
  price: string;
  image: string;
  icon: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItemData[];
}
