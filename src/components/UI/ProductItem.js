export default function ProductItem({ product: { id, title, image, alt, price} }) {
  return (
    <div className="bg-white flex flex-col gap-y-1 items-center text-center text-sm font-semibold p-3">
      <img src={image} alt={title} />
      <div className="text-brand-color">₺{price}</div>
      <div className="text-gray-900">{title}</div>
      <div className="text-gray-500">{alt}</div>
    </div>
  )
}