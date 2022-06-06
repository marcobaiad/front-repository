import './transferenceForm.css'
import { useAccountContext } from '../../contexts/account/accountsContext'
import ButtonComponent from '../Button'
import { useUserContext } from '../../contexts/user/userContext'

const NewTransferenceForm = ({
  newTrasnference,
  setNewTrasnference,
  setErrorAmount,
}) => {
  const { selectedAccount, accounts, transferenceHandler } = useAccountContext()
  const { selectedCustomer } = useUserContext()

  const checkTransferenceHandler = async (e) => {
    e.preventDefault()
    setErrorAmount(false)
    if (selectedAccount.amount < newTrasnference.amount)
      return setErrorAmount(true)
    transferenceHandler({ ...newTrasnference, userId: selectedCustomer.id })
  }

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setNewTrasnference({ ...newTrasnference, [name]: value })
  }

  return (
    <form className='form-new-transference' onSubmit={checkTransferenceHandler}>
      <div className='form-control'>
        <label htmlFor='number'>N° de Cuenta Hacia: </label>
        <select
          id='number'
          name='toAccountId'
          required
          value={newTrasnference?.toAccountId || ''}
          onChange={onChangeHandler}
        >
          <option value='' hidden>
            Seleccioná una cuenta
          </option>
          {accounts
            .filter((account) => account.number !== selectedAccount.number)
            .map((account) => (
              <option key={account.id} value={account.id}>
                {account.number}
              </option>
            ))}
        </select>
      </div>
      <div className='form-control'>
        <label htmlFor='amount'>Monto</label>
        <input
          id='amount'
          name='amount'
          required
          value={newTrasnference?.amount || ''}
          onKeyDown={(e) =>
            e?.code?.includes('Key') && !e?.ctrlKey && e?.preventDefault()
          }
          onChange={onChangeHandler}
        />
      </div>
      <ButtonComponent
        buttonProps={{
          type: 'submit',
          className: 'submit-button',
          onClick: checkTransferenceHandler,
        }}
      >
        Enviar
      </ButtonComponent>
    </form>
  )
}
export default NewTransferenceForm
