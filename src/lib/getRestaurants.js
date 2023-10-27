import { getCookie } from "cookies-next";

export const getRestaurants = async () => {

    const res = await fetch(`${process.env.API_URL}/restaurant`, {
        headers: {
            'Authorization': `Bearer ${getCookie('token')}`
        }
    })

    const data = res.json()

    return data
}

