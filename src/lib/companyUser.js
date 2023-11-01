import { getCookie } from "cookies-next";


export const GetAll = async () => {

    const res = await fetch(`${process.env.API_URL}/companyUser`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${getCookie('token')}`
        }
    })

    const data = await res.json()

    return data
}

export const Search = async (companyUsers, search) => {
    const searchedCompanyUsers = companyUsers.filter(x => x.name.toLowerCase().search(search.toLowerCase()) > -1)

    return searchedCompanyUsers
}

export const Paginate = async (companyUsers, page = 0, amount = 10) => {
    let paginatedCompanyUsers = companyUsers.slice(0 + (amount * page), amount + (amount * page))

    return paginatedCompanyUsers
}

export const Update = async ({id, name, surname, email, phone, password, isActive, companyId, profile, lang}) => {

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
            company_id: companyId,
            profile: profile,
            lang: lang,
            is_active: isActive ? 1 : 0,
        }),
        if(password = '') {
            body.password.delete()
        }
    })

    const data = await res.json()

    return data
}

export const Delete = async (id) => {
    const res = await fetch(`${process.env.API_URL}/companyUser/${id}`, {
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

export const Create = async ({name, surname, email, phone, password, isActive, companyId, profile, lang}) => {

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
            company_id: companyId,
            profile: profile,
            lang: lang,
            is_active: isActive ? 1 : 0,
        })
    })

    const data = await res.json()

    return data
}