export const getUser = async (token) => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token.value}`,
        'Accept': 'application/json'
    }
  })

  const data = await res.json()

  return data.data
}