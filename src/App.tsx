import { useEffect, useState } from 'react'

// Internal Dependencies
import SearchForm from '@/components/search-form'

// Custom hooks
import { useTitle } from '@/utils/hooks'

// Custom actions
import { login } from '@/actions/auth'
import { EMAIL, PASSWD } from './utils/constants'
import { scrap } from './actions/scrap'
import { ScrapResponse } from './types/scrap'
import ItemCard from './components/item-card'

export default function App() {
  useTitle('React-SPA')

  useEffect(() => {
    // Login using the credentials
    const success = login({ email: EMAIL, password: PASSWD })
    console.log({ success })
  }, [])

  const [data, setData] = useState<ScrapResponse | null>(null)

  useEffect(() => {
    console.log({ data })
  }, [data])

  return (
    <div>
      {'Ready to use!'}
      <SearchForm
        onSubmit={(data) => {
          scrap(data.keywords).then((payload) => setData(payload))
        }}
      />

      {data && (
        <div>
          {data.items.map((item, index) => (
            <ItemCard {...item} key={index} />
          ))}
        </div>
      )}
    </div>
  )
}
