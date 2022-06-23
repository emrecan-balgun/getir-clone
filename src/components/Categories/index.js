import { useState, useEffect } from 'react';
import CategoryData from 'api/categories.json';
import Category from 'components/UI/Category';
import Title from 'components/UI/Title';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // istek
    setCategories(CategoryData);
  }, [])

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <Title>Kategoriler</Title>
        <div className="grid grid-cols-4 2xl:grid-cols-12 xl:grid-cols-10 lg:grid-cols-8 md:grid-cols-6">
          {
            !categories.length && 'Yükleniyor..'
          }
          {
            categories && categories.map((category, index) => 
              <Category key={index} category={category} />)
          }
        </div>
      </div>
    </div>
  )
}