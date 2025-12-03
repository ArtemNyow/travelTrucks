export interface GalleryItem {
  thumb: string;
  original: string;
}

export interface Review {
  reviewer_name: string;
  reviewer_email: string;
  reviewer_rating: number;
  comment: string;
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  adults: number;
  children?: number;
  description: string;
  transmission: string;
  engine: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  gallery: GalleryItem[];

  // не всі поля обов'язкові в Card → робимо частину optional
  reviews?: Review[];
  details?: {
    airConditioner?: number;
    CD?: boolean;
    radio?: boolean;
    hob?: number;
    beds?: number;
    toilet?: boolean;
    shower?: boolean;
    freezer?: boolean;
    microwave?: boolean;
  };
}
export interface Filters {
  location?: string;
  form?: string;
  AC?: boolean;
  kitchen?: boolean;
  bathroom?: boolean;
  TV?: boolean;
  transmission?: string;
}
