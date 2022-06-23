import CardsData from 'api/cards.json';
import { useState, useEffect } from 'react';

export default function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // istek
    setCards(CardsData);
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-0">
        {
          cards.length && cards.map(card => (
            <div className="bg-white p-14 rounded-lg shadow-sm flex flex-col items-center text-center" key={card.id}>
              <img className="w-[150px] h-[150px] mb-6" src={card.image} alt={card.title} />
              <h6 className="font-semibold text-lg text-primary-brand-color">{card.title}</h6>
              <p className="mt-2 text-sm text-gray-500">{card.description}</p>
            </div>
          ))
        }
    </div>
  )
}