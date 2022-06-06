import { useState } from 'react'
import './accountDetails.css'
import { useUserContext } from '../../contexts/user/userContext'
import { useAccountContext } from '../../contexts/account/accountsContext'
import ModalComponent from '../Modal'
import NewTransferenceForm from '../NewTransferenceForm'

const AccountDetailsComponent = ({ number, type, amount }) => {
  const [errorAmount, setErrorAmount] = useState(false)
  const { selectedAccount, selectAccountHandler } = useAccountContext()
  const [newTrasnference, setNewTrasnference] = useState({
    fromAccountId: selectedAccount?.id,
  })
  const { userName } = useUserContext()

  return (
    <>
      <div className='container button-container'>
        <h2 className='subtitle'>Detalle de Cuenta</h2>
        <ModalComponent
          setNewTrasnference={setNewTrasnference}
          newTrasnference={newTrasnference}
          closeHandler={() => {
            setNewTrasnference({})
          }}
        >
          <p style={{ fontSize: '20px' }}>
            Cuenta desde: {selectedAccount?.number}
          </p>
          <NewTransferenceForm
            setErrorAmount={setErrorAmount}
            setNewTrasnference={setNewTrasnference}
            newTrasnference={newTrasnference}
            selectAccountHandler={selectAccountHandler}
          />
        </ModalComponent>
        {errorAmount && (
          <p>No es posible realizar esta transferencia. Monto incorrecto</p>
        )}
      </div>
      <ul className='account-detail-list'>
        <li>
          <h4>Usuario: {userName}</h4>
        </li>
        <li>Nro: {number}</li>
        <li>Tipo: {type}</li>
        <li>Monto: {amount}</li>
      </ul>
    </>
  )
}
export default AccountDetailsComponent
