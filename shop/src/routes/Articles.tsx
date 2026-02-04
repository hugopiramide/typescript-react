import { useLoaderData, type LoaderFunction } from 'react-router-dom';
import CardList from '../components/CardList'
import { type ProductResponse } from '../types/types';

const loader: LoaderFunction = async () => {
  const response = await fetch('http://localhost:8080/api/products')
  const products = await response.json()
  return products
}

const Articles = () => {

   const products = useLoaderData() as ProductResponse[];
  return (
    <>
     {products.length === 0 ? (
        <p className='no-items'>No posts</p>
      ) : (
        <CardList products={products} />
      )}
    </>
  )
}

Articles.loader = loader

export default Articles