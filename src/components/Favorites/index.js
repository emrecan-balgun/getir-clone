import { useState, useEffect } from 'react'; 
import Title from 'components/UI/Title';
import ProductItem from 'components/UI/ProductItem';
import Products from 'api/products.json';

export default function Favorites() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // istek
    setProducts(Products);
  }, [])

  return (
    <div>
      <Title>Favoriler</Title>
      <div className="grid grid-cols-3 2xl:grid-cols-9 xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 gap-0.1 bg-white rounded-lg overflow-hidden">
        {
          products.length && products.map((product) => <ProductItem key={product.id} product={product} />) 
        }
      </div>
    </div> 
  )
}