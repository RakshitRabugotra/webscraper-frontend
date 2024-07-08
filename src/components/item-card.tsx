import { ScrapItem } from '@/types/scrap'

export default function ItemCard(props: ScrapItem) {
  return (
    <div>
      <img src={props['image-src']} alt='item-image' />
      <h4>{props.title}</h4>
      <p>{props.rating}</p>
      <p>{'' + props['price-symbol'] + props['price-whole']}</p>
    </div>
  )
}
