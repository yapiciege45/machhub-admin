import { getCookie } from "cookies-next";

export const GetCompanyUsers = async (pagination = true, page = 0, amount = 10, search = '') => {

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


export const UpdateCompanyUser = async (id, name, surname, email, phone, password, isActive) => {

    const res = await fetch(`${process.env.API_URL}/companyUser/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${getCookie('token')}`
        },
        body: JSON.stringify({
            name: name,
            surname: surname,
            email: email,
            phone, phone,
            password: password,
            is_active: isActive ? 1 : 0,
        }),
        if(password = '') {
            body.password.delete()
        }
    })

    const data = await res.json()

    return data
}

export const DeleteCompanyUser = async (id) => {
    const res = await fetch(`${process.env.API_URL}/companyser/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${getCookie('token')}`
        }
    })

    const data = await res.json()

    return data
}

export const CreateCompanyUser = async (name, surname, email, phone, password, isActive) => {
    
        const res = await fetch(`${process.env.API_URL}/companyUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${getCookie('token')}`
            },
            body: JSON.stringify({
                name: name,
                surname: surname,
                email: email,
                phone, phone,
                password: password,
                is_active: isActive ? 1 : 0,
            })
        })
    
        const data = await res.json()
    
        return data
}