import { Category, CollectionItem, Product } from "../types";

// Categories for the main category grid
export const categories: Category[] = [
  {
    title: 'TSHIRT',
    image: '/images/categories/tshirt.jpg',
    link: '/tshirt-top',
    alt: 'T-shirts'
  },
  {
    title: 'TOP WEAR',
    image: '/images/categories/topwear.jpg',
    link: '/tshirt-top',
    alt: 'Top Wear'
  },
  {
    title: 'NIGHT PANT',
    image: '/images/categories/nightpant.jpg',
    link: '/night-bottoms',
    alt: 'Night Pants'
  },
  {
    title: 'CHILD WEAR',
    image: '/images/categories/childwear.jpg',
    link: '/girls-wear',
    alt: 'Child Wear'
  },
  {
    title: 'CO-ORD SETS',
    image: '/images/categories/coordsets.jpg',
    link: '/co-ord-sets',
    alt: 'Co-ord Sets'
  },
  {
    title: 'LADIES NIGHT DRESS',
    image: '/images/categories/ladiesnight.jpg',
    link: '/night-bottoms',
    alt: 'Ladies Night Dress'
  }
];

// Collection items for the collection slider
export const collectionItems: CollectionItem[] = [
  {
    title: 'BOTTOMWEAR',
    image: 'https://placehold.co/600x800/orange/white?text=Bottomwear',
    link: '/night-bottoms',
    alt: 'Bottomwear Collection'
  },
  {
    title: 'INDIGO CHRONICALS',
    image: 'https://placehold.co/600x800/blue/white?text=Indigo',
    link: '/tshirt-top',
    alt: 'Indigo Chronicals Collection'
  },
  {
    title: 'EVERYDAY GRACE',
    image: 'https://placehold.co/600x800/purple/white?text=Grace',
    link: '/co-ord-sets',
    alt: 'Everyday Grace Collection'
  },
  {
    title: 'ONLINE EXCLUSIVE',
    image: 'https://placehold.co/600x800/red/white?text=Exclusive',
    link: '/tshirt-top',
    alt: 'Online Exclusive Collection'
  },
  {
    title: 'RED LEHENGA',
    image: 'https://placehold.co/600x800/maroon/white?text=Lehenga',
    link: '/co-ord-sets',
    alt: 'Red Lehenga Collection'
  },
  {
    title: 'CASUAL CHIC',
    image: 'https://placehold.co/600x800/teal/white?text=Casual',
    link: '/tshirt-top',
    alt: 'Casual Chic Collection'
  },
  {
    title: 'SUMMER VIBES',
    image: 'https://placehold.co/600x800/yellow/black?text=Summer',
    link: '/tshirt-top',
    alt: 'Summer Vibes Collection'
  },
  {
    title: 'ETHNIC FUSION',
    image: 'https://placehold.co/600x800/green/white?text=Ethnic',
    link: '/co-ord-sets',
    alt: 'Ethnic Fusion Collection'
  }
];

// Recommended products data
export const recommendedProducts: Product[] = [
  {
    id: 1,
    title: 'OFF-WHITE AND BLACK COTTON PRINTED TIERED DRESS',
    image: 'https://placehold.co/600x800/olive/white?text=Sage+Green',
    price: '₹3,999',
    originalPrice: '₹5,999',
    discount: '30% OFF',
    link: '/product/1',
    alt: 'Off-White and Black Cotton Printed Tiered Dress',
    badge: 'Sale',
    description: 'This elegant piece features premium cotton fabric with intricate printed details. Perfect for both casual and formal occasions.',
    colors: [
      { name: 'Off-White-Black', color: '#f8f4e3' }
    ],
    sizes: ['32', '34', '36', '38', '40', '42'],
    thumbnails: [
      { url: 'https://placehold.co/600x800/olive/white?text=Sage+Green', alt: 'Front view' },
      { url: 'https://placehold.co/600x800/olive/white?text=Sage+Green+Back', alt: 'Back view' },
      { url: 'https://placehold.co/600x800/olive/white?text=Sage+Green+Side', alt: 'Side view' },
      { url: 'https://placehold.co/600x800/olive/white?text=Sage+Green+Detail', alt: 'Detail view' }
    ]
  },
  {
    id: 2,
    title: 'Pink Cotton Floral Strappy Straight Suit Set',
    image: 'https://placehold.co/600x800/pink/white?text=Pink+Floral',
    price: '₹5,995',
    link: '/product/2',
    alt: 'Pink Cotton Floral Strappy Straight Suit Set',
    description: 'Beautiful pink cotton suit set featuring floral prints and a comfortable strappy design.',
    colors: [
      { name: 'Pink-Floral', color: '#ffb6c1' }
    ],
    sizes: ['32', '34', '36', '38', '40', '42'],
    thumbnails: [
      { url: 'https://placehold.co/600x800/pink/white?text=Pink+Floral', alt: 'Front view' },
      { url: 'https://placehold.co/600x800/pink/white?text=Pink+Floral+Back', alt: 'Back view' },
      { url: 'https://placehold.co/600x800/pink/white?text=Pink+Floral+Side', alt: 'Side view' },
      { url: 'https://placehold.co/600x800/pink/white?text=Pink+Floral+Detail', alt: 'Detail view' }
    ]
  },
  {
    id: 3,
    title: 'Off-White Cotton Embroidered Flared Suit Set',
    image: 'https://placehold.co/600x800/ivory/black?text=Off-White',
    price: '₹15,950',
    link: '/product/3',
    alt: 'Off-White Cotton Embroidered Flared Suit Set'
  },
  {
    id: 4,
    title: 'Beige and Teal Pure Cotton Straight Kurta Set',
    image: 'https://placehold.co/600x800/teal/white?text=Beige+Teal',
    price: '₹3,299',
    link: '/product/4',
    alt: 'Beige and Teal Pure Cotton Straight Kurta Set'
  },
  {
    id: 5,
    title: 'Dull Pink Embroidered Straight Suit Set',
    image: 'https://placehold.co/600x800/lightpink/white?text=Dull+Pink',
    price: '₹4,599',
    link: '/product/5',
    alt: 'Dull Pink Embroidered Straight Suit Set'
  },
  {
    id: 6,
    title: 'Blue Chanderi Silk Printed Kurta Set',
    image: 'https://placehold.co/600x800/blue/white?text=Silk+Kurta',
    price: '₹5,699',
    link: '/product/6',
    alt: 'Blue Chanderi Silk Printed Kurta Set',
    badge: 'Online Exclusive'
  },
  {
    id: 7,
    title: 'Yellow Linen Embroidered Sharara Suit',
    image: 'https://placehold.co/600x800/yellow/black?text=Sharara',
    price: '₹5,250',
    originalPrice: '₹8,250',
    discount: '35% OFF',
    link: '/product/7',
    alt: 'Yellow Linen Embroidered Sharara Suit',
    badge: 'Sale'
  },
  {
    id: 8,
    title: 'Teal Rayon Printed Straight Kurta Set',
    image: 'https://placehold.co/600x800/teal/white?text=Rayon+Kurta',
    price: '₹4,299',
    link: '/product/8',
    alt: 'Teal Rayon Printed Straight Kurta Set'
  }
];

// Sample recently viewed products
export const sampleRecentlyViewed: Product[] = [
  {
    id: 101,
    title: 'Off-White and Blue Cotton Floral Tiered Dress',
    image: 'https://placehold.co/600x800/lightskyblue/white?text=Tiered+Dress',
    price: '₹2,999',
    link: '/product/101',
    alt: 'Off-White and Blue Cotton Floral Tiered Dress'
  },
  {
    id: 102,
    title: 'Multi-coloured Georgette Tropical Printed A-Line Kurta',
    image: 'https://placehold.co/600x800/purple/white?text=A-Line+Kurta',
    price: '₹1,609',
    originalPrice: '₹2,299',
    discount: '30% OFF',
    link: '/product/102',
    alt: 'Multi-coloured Georgette Tropical Printed A-Line Kurta',
    badge: 'Sale'
  },
  {
    id: 103,
    title: 'Pink Pure Cotton Floral Straight Kurta',
    image: 'https://placehold.co/600x800/hotpink/white?text=Straight+Kurta',
    price: '₹1,799',
    link: '/product/103',
    alt: 'Pink Pure Cotton Floral Straight Kurta'
  },
  {
    id: 104,
    title: 'Emerald Green Silk Festive Tiered Anarkali Dress',
    image: 'https://placehold.co/600x800/emerald/white?text=Anarkali',
    price: '₹10,500',
    link: '/product/104',
    alt: 'Emerald Green Silk Festive Tiered Anarkali Dress'
  },
  {
    id: 105,
    title: 'White and Black Cotton Printed Anarkali Kurta Set',
    image: 'https://placehold.co/600x800/ivory/black?text=Printed+Kurta',
    price: '₹4,599',
    link: '/product/105',
    alt: 'White and Black Cotton Printed Anarkali Kurta Set'
  }
];

// Shopping greetings for popup
export const shoppingGreetings = [
  "Ready to explore our latest collection?",
  "Discover stylish deals waiting for you!",
  "Welcome back to NPlusOne shopping!",
  "Your fashion journey continues here!",
  "New arrivals just for your style!",
  "Find your perfect fashion match today!",
  "Exclusive deals waiting in your cart!",
  "Shop the season's hottest trends now!"
]; 