import { createContext, useContext, useState } from 'react'
import { getAccounts } from './services/getAccounts'
// import { getAccountDetails } from './services/getAccountDetails'
import { getTransferences } from './services/getTransferences'
import { postTrasnference } from './services/postTransference'

const AccountContext = createContext()

export const useAccountContext = () => useContext(AccountContext)

export const AccountProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([])
  const [pageNext, setpageNext] = useState(1)
  const [selectedAccount, setSelectedAccount] = useState(null)
  const [transferences, setTransferences] = useState([])

  const selectAccountHandler = (account) => {
    setTransferences([])
    setSelectedAccount(account)
  }

  const getAccountDetailsHandler = async (userId) => {
    if (!userId) return
    try {
      const { response, nextPage } = await getAccounts(userId, pageNext || 1)
      setAccounts(response)
      setpageNext(nextPage)
    } catch (error) {
      console.log(
        'file: index.js ~ line 13 ~ getAccountDetailsHandler ~ error',
        error
      )
    }
  }

  const getTransferencesHandler = async () => {
    if (!selectedAccount) return
    try {
      const { response } = await getTransferences(selectedAccount.id)
      setTransferences(response)
    } catch (error) {
      console.log(
        'file: index.js ~ line 34 ~ getTransferencesHandler ~ error',
        error
      )
    }
  }

  const transferenceHandler = async (transference) => {
    try {
      const { response = [] } = await postTrasnference(transference)
      if (response.length) {
        setTransferences([...transferences, response[0]])
        const editedAccountList = [...accounts].map((account) => {
          if (account.id === response[0].fromAccountId) {
            return { ...account, amount: account.amount - response[0].amount }
          }
          if (account.id === response[0].toAccountId) {
            return { ...account, amount: account.amount + response[0].amount }
          }
          return account
        })
        setAccounts(editedAccountList)
      }
    } catch (error) {
      console.log(
        'file: accountsContext.js ~ line 50 ~ transferenceHandler ~ error',
        error
      )
    }
  }

  return (
    <AccountContext.Provider
      value={{
        pageNext,
        transferences,
        accounts,
        selectedAccount,
        transferenceHandler,
        selectAccountHandler,
        getTransferencesHandler,
        getAccountDetailsHandler,
      }}
    >
      {children}
    </AccountContext.Provider>
  )
}
