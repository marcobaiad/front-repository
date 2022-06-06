// import { getClients } from './services/getClients'
import { createContext, useContext, useState } from 'react'
import { getClients } from './services/getClients'

const initialState = {
  customers: {},
  userSelected: {},
  nextPage: 1,
}

const UserContext = createContext()

export const useUserContext = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [customers, setCustomers] = useState([])
  const [nextPage, setNextPage] = useState(1)

  const getClientsHandler = async (page) => {
    try {
      const { response, nextPage } = await getClients(page)
      setCustomers(response)
      setNextPage(nextPage)
    } catch (error) {
      console.log('file: index.js ~ line 11 ~ getClientsHandler ~ error', error)
    }
  }

  return (
    <UserContext.Provider
      value={{ initialState, customers, nextPage, getClientsHandler }}
    >
      {children}
    </UserContext.Provider>
  )
}
