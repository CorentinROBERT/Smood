export interface Restaurant {
  id: string;
  name: string;
  logo: string;
  description: string;
  isOpen: boolean;
  deliveryFee: number;
  imgMobile?: string;
  imgItem?: string;
  priceRange: number;
  isNew: boolean;
  zone?: string;
  storeTags: Array<{ id: string | number; name: string }>;
  estimatedArrivalTime: number;
}
