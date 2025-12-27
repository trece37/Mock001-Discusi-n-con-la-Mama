export interface DataPoint {
  id: string;
  label: string;
  value: string;
  icon: 'clock' | 'globe' | 'shopping-cart' | 'quote' | 'alert' | 'user';
  actionLabel: string;
}

export interface Recipe {
  id: string;
  title: string;
  origin: string;
  description: string;
  memory: string;
}

export interface PricePin {
  id: string;
  location: string;
  item: string;
  price: string;
  context: string;
  top: string; // % for positioning
  left: string; // % for positioning
}

export interface Testimonial {
  id: string;
  user: string;
  age: number;
  text: string;
}
