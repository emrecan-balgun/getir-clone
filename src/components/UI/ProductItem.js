import { FiPlus } from 'react-icons/fi';

export default function ProductItem({ product: { id, title, image, alt, price} }) {
  return (
    <div className="bg-white flex flex-col gap-y-1 relative items-center text-center text-sm font-semibold p-3">
      <button className="absolute top-3 right-3 bg-white w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg text-brand-color shadow-md transition-colors hover:border-brand-color">
        <FiPlus size={16}/>
      </button>
      <img src={image} alt={title} />
      <div className="text-brand-color">₺{price}</div>
      <div className="text-gray-900">{title}</div>
      <div className="text-gray-500">{alt}</div>
    </div>
  )
}