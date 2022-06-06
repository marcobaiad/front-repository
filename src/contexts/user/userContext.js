// import { getClients } from './services/getClients'
import { createContext, useContext, useState } from 'react'
import { getClients } from './services/getClients'

const UserContext = createContext()

export const useUserContext = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [customers, setCustomers] = useState([])
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [nextPage, setNextPage] = useState(1)

  const getClientsHandler = async (page) => {
    try {
      const { response, nextPage } = await getClients(page)
      setCustomers(response)
      setNextPage(nextPage)
    } catch (error) {}
  }

  return (
    <UserContext.Provider
      value={{
        customers,
        nextPage,
        getClientsHandler,
        selectedCustomer,
        setSelectedCustomer,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
