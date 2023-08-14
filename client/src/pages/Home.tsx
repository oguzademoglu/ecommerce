import { Col, Row } from 'react-bootstrap'
import { Product } from '../types/Product'
import { getError } from '../utils'
import { ApiError } from '../types/ApiError'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import ProductItem from '../components/ProductItem'
import { Helmet } from 'react-helmet-async'
import { useGetProductsQuery } from '../hooks/productHooks'

const Home = () => {
  const { data: products, isLoading, error } = useGetProductsQuery()

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <Row>
      <Helmet>
        <title>TsEcommerce</title>
        <meta />
      </Helmet>
      {products!.map((product: Product) => (
        <Col key={product.slug} sm={6} md={4} lg={3}>
          <ProductItem product={product}></ProductItem>
        </Col>
      ))}
    </Row>
  )
}

export default Home
