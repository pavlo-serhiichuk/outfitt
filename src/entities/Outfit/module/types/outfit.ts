export interface Outfit {
  id?: 1,
  name?: string,
  type?: string,
  category?: string,
  brand?: string,
  size?: string,
  color?: string,
  gender?: string,
  material?: string,
  description?: string,
  createdAt?: string
  season?: string[],
  style?: string[],
  inStock?: boolean,
  price?: number,
  rating?: number,
  images?: string[],
}