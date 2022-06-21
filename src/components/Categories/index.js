import { useState, useEffect } from 'react';
import CategoryData from 'api/categories.json';
import Category from 'components/UI/Category';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // istek
    setCategories(CategoryData);
  }, [])

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <h3 className="text-sm font-semibold mb-3">Kategoriler</h3>
        <div className="grid grid-cols-10">
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