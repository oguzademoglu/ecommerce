import { Product } from '../types/Product'

const ProductItem = ({ product }: { product: Product }) => {
  return <div>{product.name}</div>
}

export default ProductItem
