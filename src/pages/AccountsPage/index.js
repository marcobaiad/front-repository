import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ButtonComponent from '../../components/Button'
import AccountDetailsComponent from '../../components/AccountDetails'
import CardBody from '../../components/CardBody/CardBody.js'
import CardComponent from '../../components/Cards.js'
import TransferencesComponent from '../../components/Transferences'
import { useAccountContext } from '../../contexts/account/accountsContext'

const AccountsPage = () => {
  const { userId } = useParams()
  const navigate = useNavigate()

  const {
    transferences,
    pageNext,
    accounts,
    selectedAccount,
    getAccountDetailsHandler,
    getTransferencesHandler,
    selectAccountHandler,
  } = useAccountContext()

  useEffect(() => {
    if (!accounts?.length && userId) getAccountDetailsHandler(userId)
    if (!userId) navigate('/', { replace: true })
  }, [userId])

  useEffect(() => {
    if (selectedAccount) getTransferencesHandler()
  }, [selectedAccount])

  return (
    <div style={{ paddingBottom: '30px' }}>
      <h3>Consulta de Saldo</h3>
      <h1>Seleccioná una cuenta a Consultar</h1>
      <div className='button-container'>
        {(pageNext - 1 > 1 || !pageNext) && (
          <ButtonComponent
            buttonProps={{
              className: 'prev-page',
              onClick: () => getAccountDetailsHandler(userId),
            }}
          >
            Volver
          </ButtonComponent>
        )}
      </div>
      <div className='container'>
        {accounts?.map((account) => (
          <CardComponent
            key={account.id}
            callback={() => selectAccountHandler(account)}
          >
            <CardBody>
              <h4>{account.type}</h4>
              <p>Nro: {account.number}</p>
            </CardBody>
          </CardComponent>
        ))}
        {pageNext > 1 && (
          <CardComponent callback={() => getAccountDetailsHandler(userId)}>
            <CardBody>
              <p className='next-card'>Ver más &#187;</p>
            </CardBody>
          </CardComponent>
        )}
      </div>
      {selectedAccount ? (
        <AccountDetailsComponent {...selectedAccount} />
      ) : null}
      {transferences.length ? (
        <TransferencesComponent data={transferences} />
      ) : null}
      {selectedAccount && !transferences.length ? (
        <p>Esta cuenta no registra transferencias</p>
      ) : null}
    </div>
  )
}
export default AccountsPage
