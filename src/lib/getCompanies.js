import { getCookie } from "cookies-next";

export const getCompanies = async (page = 0, amount = 10, search = '') => {

    const res = await fetch(`${process.env.API_URL}/company`, {
        headers: {
            'Authorization': `Bearer ${getCookie('token')}`
        }
    })

    const data = await res.json()

    let searchedData = data.filter(x => x.name.toLowerCase().search(search.toLowerCase()) > -1)

    let slicedData = searchedData.slice(0 + (amount * page), amount + (amount * page))



    return {
        data: slicedData,
        amount: data.length
    }
}

