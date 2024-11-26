import { Restaurant } from './Restaurant';

export interface NewsItem {
  type: string;
  title: string;
  stores: Restaurant[];
}
