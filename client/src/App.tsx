import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { sampleProducts } from './data'
import { Product } from './types/Product'

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>tscommerce</Navbar.Brand>
            <Nav>
              <a href="/cart" className="nav-link">
                Cart
              </a>
              <a href="/signin" className="nav-link">
                Sign In
              </a>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Row>
            {sampleProducts.map((product: Product) => (
              <Col key={product.slug} sm={6} md={4} lg={3}>
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.name}
                />
                <h2>
                  {product.brand} {product.name}
                </h2>
                <p>{product.price}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <footer>
        <div className="text-center">All rights reserved.</div>
      </footer>
    </div>
  )
}

export default App
