import CardList from '../components/CardList'
import { products } from '../products/data'

const Articles = () => {
  return (
    <CardList products={products} />
  )
}

export default Articles