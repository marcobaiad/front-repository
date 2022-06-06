import { Route, Routes } from 'react-router-dom'
import AccountDetailsComponent from './components/AccountDetails'
import LayoutCompoent from './components/Layout'
import { UserProvider } from './contexts/user/userContext'
import { AccountProvider } from './contexts/account/accountsContext'
import AccountsPage from './pages/AccountsPage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <LayoutCompoent>
      <UserProvider>
        <AccountProvider>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/accounts' element={<AccountsPage />}>
              <Route
                path='/accounts/:userId'
                element={<AccountDetailsComponent />}
              />
            </Route>
          </Routes>
        </AccountProvider>
      </UserProvider>
    </LayoutCompoent>
  )
}

export default App
