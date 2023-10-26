import { getCookie } from "cookies-next";

export const getCompanies = async () => {

    const res = await fetch(`${process.env.API_URL}/company`, {
        headers: {
            'Authorization': `Bearer ${getCookie('token')}`
        }
    })

    const data = res.json()

    return data
}

