import { apiUrl } from "@/config/apiUrl"

export const getUser = async (token) => {

  const res = await fetch(`${apiUrl()}/user`, {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token.value}`,
        'Accept': 'application/json'
    }
  })

  const data = await res.json()

  return data.data
}