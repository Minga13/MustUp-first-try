export interface Product {
  id: string;
  title: string;
  shortDescription: string;
  price: number;
  oldPrice?: number;
  image: string; // Placeholder path
  features: string[];
  forWho: string;
  details: string[]; // "What's inside"
  difference: string; // "What makes it unique"
  buyLink: string;
  isBundle?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}