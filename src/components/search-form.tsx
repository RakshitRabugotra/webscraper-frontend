import { useForm } from 'react-hook-form'

// Type definitions
import { SubmitHandler } from 'react-hook-form'

type FormValues = {
  keywords: string
}

export default function SearchForm({
  onSubmit,
}: {
  onSubmit: SubmitHandler<FormValues>
}) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>()

  // Handle the submission of the form
  const submit = handleSubmit((data) => {
    onSubmit(data)
  })

  return (
    <form onSubmit={submit}>
      <input {...register('keywords', { required: true })} />
      <button type='submit'>{isSubmitting ? 'recording' : 'submit'}</button>
    </form>
  )
}
