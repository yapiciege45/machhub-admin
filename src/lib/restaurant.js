import { getCookie } from "cookies-next";

export const getAllRestaurants = async (pagination = true, page = 0, amount = 10, search = '') => {

    const res = await fetch(`${process.env.API_URL}/restaurant`, {
        headers: {
            'Authorization': `Bearer ${getCookie('token')}`
        }
    })

    const data = await res.json()

    return data
}

export const searchRestaurants = async (restaurants, search) => {
    const searchedRestaurants = restaurants.filter(x => x.name.toLowerCase().search(search.toLowerCase()) > -1)

    return searchedRestaurants
}

export const paginateRestaurants = async (restaurants, page = 0, amount = 10) => {
    let paginatedRestaurants = restaurants.slice(0 + (amount * page), amount + (amount * page))

    return paginatedRestaurants
}

export const UpdateRestaurant = async (id, props) => {
    const res = await fetch(`${process.env.API_URL}/restaurant/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${getCookie('token')}`
        },
        body: JSON.stringify(props)
      })
  
      const data = await res.json()

      return data
}

export const CreateRestaurant = async (props) => {
    const res = await fetch(`${process.env.API_URL}/restaurant`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${getCookie('token')}`
        },
        body: JSON.stringify(props)
    })
  
      const data = await res.json()

      return data
}

export const DeleteRestaurant = async (id) => {
    const res = await fetch(`${process.env.API_URL}/restaurant/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${getCookie('token')}`
        }
      })
  
      const data = await res.json()

      return data
}

