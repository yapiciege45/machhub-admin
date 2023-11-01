import { getCookie } from "cookies-next";

export const getAllCategories = async (id) => {

    const res = await fetch(`${process.env.API_URL}/menu/${id}`, {
        headers: {
            'Authorization': `Bearer ${getCookie('token')}`
        }
    })

    const data = await res.json()

    const categories = data.categories

    return categories
}

export const searchCategories = async (categories, search) => {
    const searchedCategories = categories.filter(x => x.name.toLowerCase().search(search.toLowerCase()) > -1)

    return searchedCategories
}

export const paginateCategories = async (categories, page = 0, amount = 10) => {
    let paginatedCategories = categories.slice(0 + (amount * page), amount + (amount * page))

    return paginatedCategories
}

