import { getCookie } from "cookies-next";

export const getAllCompanies = async () => {

    const res = await fetch(`${process.env.API_URL}/company`, {
        headers: {
            'Authorization': `Bearer ${getCookie('token')}`
        }
    })

    const data = await res.json()

    return data 
}

export const searchCompanies = async (companies, search) => {
    const searchedCompanies = companies.filter(x => x.name.toLowerCase().search(search.toLowerCase()) > -1)

    return searchedCompanies
}

export const paginateCompanies = async (companies, page = 0, amount = 10) => {
    let paginatedCompanies = companies.slice(0 + (amount * page), amount + (amount * page))

    return paginatedCompanies
}

export const DeleteCompany = async (id) => {
    const res = await fetch(`${process.env.API_URL}/company/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${getCookie('token')}`
        }
      })
  
      const data = await res.json()
  
      return data
}

export const CreateCompany = async (props) => {
    const res = await fetch(`${process.env.API_URL}/company`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${getCookie('token')}`
        },
        body: JSON.stringify(props)
      })
  
      const data = await res.json()

      console.log(data)

      return data
}

export const UpdateCompany = async (id, props) => {
    const res = await fetch(`${process.env.API_URL}/company/${id}`, {
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

