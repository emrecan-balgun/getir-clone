import { useState, useEffect } from 'react'; 
import Title from 'components/UI/Title';
import Products from 'api/products.json';

export default function Favorites() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // istek
    setProducts(Products);
  }, [])

  return (
    <Title>Favoriler</Title>
  )
}