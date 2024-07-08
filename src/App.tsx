import Yoo from '@/components/Yoo'
import { useTitle } from '@/utils/hooks'

export default function App() {
  useTitle('React-SPA')

  return (
    <div>
      {'Ready to use!'}
      <Yoo />
    </div>
  )
}
