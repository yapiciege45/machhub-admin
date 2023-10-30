import { getCookie } from "cookies-next";

export const getAdminUsers = async (pagination = true, page = 0, amount = 10, search = '') => {

    const res = await fetch(`${process.env.API_URL}/admin`, {
        headers: {
            'Authorization': `Bearer ${getCookie('token')}`
        }
    })

    const data = await res.json()

    let searchedData = data.filter(x => x.name.toLowerCase().search(search.toLowerCase()) > -1)

    let slicedData = searchedData.slice(0 + (amount * page), amount + (amount * page))


    if (pagination) {
        return {
            data: slicedData,
            amount: data.length
        }
    } else {
        return {
            data,
            amount: data.length
        }
    }
}

export const getCompanyUsers = async (pagination = true, page = 0, amount = 10, search = '') => {

    const res = await fetch(`${process.env.API_URL}/companyUser`, {
        headers: {
            'Authorization': `Bearer ${getCookie('token')}`
        }
    })

    const data = await res.json()

    let searchedData = data.filter(x => x.name.toLowerCase().search(search.toLowerCase()) > -1)

    let slicedData = searchedData.slice(0 + (amount * page), amount + (amount * page))


    if (pagination) {
        return {
            data: slicedData,
            amount: data.length
        }
    } else {
        return {
            data,
            amount: data.length
        }
    }
}

export const getRestaurantUsers = async (pagination = true, page = 0, amount = 10, search = '') => {

    const res = await fetch(`${process.env.API_URL}/restaurantUser`, {
        headers: {
            'Authorization': `Bearer ${getCookie('token')}`
        }
    })

    const data = await res.json()

    let searchedData = data.filter(x => x.name.toLowerCase().search(search.toLowerCase()) > -1)

    let slicedData = searchedData.slice(0 + (amount * page), amount + (amount * page))


    if (pagination) {
        return {
            data: slicedData,
            amount: data.length
        }
    } else {
        return {
            data,
            amount: data.length
        }
    }
}