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

export const turnCategoriesTreeTable = async (categories) => {
    let data = []

    categories.forEach(({ id, name, products, is_active, description }, indexCategory) => {
        let newDataProducts = []
        let newDataVariants = []
        let newDataOptions = []

        products.forEach(({ id, name, description, is_active, price, without_discount_price, variants }, indexProduct) => {
            variants.forEach(({ id, name, options }, indexVariant) => {
                options.forEach(({ id, name, price }, indexOption) => {
                    newDataOptions.push({
                        id,
                        type: 'option',
                        key: `${indexCategory}-${indexProduct}-${indexVariant}-${indexOption}`,
                        data: {
                            name, 
                            price
                        }
                    })
                })

                newDataVariants.push({
                    id,
                    type: 'variant',
                    key: `${indexCategory}-${indexProduct}-${indexVariant}`,
                    data: {
                        name,
                    },
                    children: newDataOptions,
                })

                
            })

            newDataProducts.push({
                id,
                type: 'product',
                key: `${indexCategory}-${indexProduct}`,
                data: {
                    name,
                    description,
                    is_active,
                    price,
                    without_discount_price,
                },
                children: newDataVariants
            })



        })

        let newData = {
            id,
            type: 'category',
            key: `${indexCategory}`,
            data: {
                name,
                description,
                is_active,
            },
            children: newDataProducts,
        }

        data.push(newData)
    });

    return data
}

export const paginateCategories = async (categories, page = 0, amount = 10) => {
    let paginatedCategories = categories.slice(0 + (amount * page), amount + (amount * page))

    return paginatedCategories
}

