/*
 Type definition related to scraping
*/

export interface ScrapItem {
  title: string
  href: string
  ['price-symbol']: string
  ['price-whole']: string
  rating: string
  ['image-src']: string
}

export interface ScrapResponse {
  count: number
  items: ScrapItem[]
}
