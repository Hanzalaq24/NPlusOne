// Product interface for all product data
export interface Product {
  id: number;
  title: string;
  image: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  link: string;
  alt: string;
  badge?: string;
}

// Category interface for category cards
export interface Category {
  title: string;
  image: string;
  link: string;
  alt: string;
}

// Collection item interface
export interface CollectionItem {
  title: string;
  image: string;
  link: string;
  alt: string;
} 