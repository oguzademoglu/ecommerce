import { Product } from './types/Product'

export const sampleProducts: Product[] = [
  {
    name: 'Slim Shirt',
    slug: 'slim-shirt',
    image: '../images/nike.png',
    category: 'Shirts',
    brand: 'Nike',
    price: 300,
    countInStock: 50,
    description: 'A shirt',
    rating: 5,
    numReviews: 100,
  },
  {
    name: 'Slim Pant',
    slug: 'slim-pant',
    image: '../images/nike.png',
    category: 'Pants',
    brand: 'Nike',
    price: 400,
    countInStock: 70,
    description: 'A pant',
    rating: 4,
    numReviews: 150,
  },
]
