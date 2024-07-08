import { ScrapResponse } from '@/types/scrap'

/*
    Related to the scrapping of the data
*/
export const scrap = async (keywords: string, filterNA: boolean = true) => {
  // Create a form-data object
  const form = new FormData()
  form.append('keywords', keywords)
  // Should we filter out the N/A results ?
  form.append('filterNA', filterNA ? 'yes' : 'no')
  // Send a request to the server
  return await fetch('api/scrap', {
    method: 'POST',
    body: form,
  }).then((resp) => {
    if (resp.ok) return resp.json() as Promise<ScrapResponse>
    return null
  })
}
