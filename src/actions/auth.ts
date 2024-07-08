import { AuthCredentials } from '@/types/auth'

/*
    All the fetch requests related to authentication
*/
export const login = ({ email, password }: AuthCredentials) => {
  // Create a new form-data object
  const form = new FormData()
  form.append('email', email)
  form.append('password', password)
  // Send the authentication request
  try {
    // Return if the response is okay or not
    return fetch('/api/login', {
      method: 'POST',
      body: form,
    }).then((response) => response.ok)
  } catch (error) {
    // In case of error log it and return null
    console.error('ERROR: ', error)
  }
  return null
}
