import { getCookie } from "cookies-next";

export const getCategories = async (id, pagination = true, page = 0, amount = 10, search = '') => {

    const res = await fetch(`${process.env.API_URL}/menu/${id}`, {
        headers: {
            'Authorization': `Bearer ${getCookie('token')}`
        }
    })

    const data = await res.json()

    const categories = data.categories

    let allProducts = []

    categories.forEach(category => {
        category.products.forEach(product => {
            allProducts.push(product)
        });
    });

    console.log(allProducts[0].name.toLowerCase().search(search.toLowerCase()))

    const filteredProducts = allProducts.filter(x => x.name.toLowerCase().search(search.toLowerCase()) > -1)
}

