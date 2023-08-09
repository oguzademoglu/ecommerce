// import { useState } from 'react'

import './App.css'
import { sampleProducts } from './data'
import { Product } from './types/Product'

function App() {
  // const [count, setCount] = useState(10)

  return (
    <>
      <header>TS ECom</header>
      <main>
        <ul>
          {sampleProducts.map((product: Product) => (
            <li key={product.slug}>
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />
              <h2>
                {product.brand} {product.name}
              </h2>
              <p>{product.price}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer>All rights reserved.</footer>
    </>
  )
}

export default App
