import { useEffect } from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom'
import CardBody from '../../components/CardBody/CardBody.js'
import CardComponent from '../../components/Cards.js'
import ButtonComponent from '../../components/Button'
import { useUserContext } from '../../contexts/user/userContext'

const HomePage = () => {
  const navigate = useNavigate()

  const { customers = [], nextPage = 1, getClientsHandler } = useUserContext()

  useEffect(() => {
    if (!customers?.length) getClientsHandler()
  }, [])

  return (
    <>
      <h1>Consulta de clientes</h1>
      <h2 className='subtitle'>
        Seleccioná un cliente para visualizar sus cuentas
      </h2>
      <div className='button-container'>
        {nextPage > 1 ||
          (!nextPage && (
            <ButtonComponent
              buttonProps={{
                className: 'prev-page',
                onClick: () => {
                  getClientsHandler(nextPage > 1 ? nextPage - 1 : 1)
                },
              }}
            >
              Volver
            </ButtonComponent>
          ))}
      </div>
      <div className='container'>
        {customers.length ? (
          <>
            {customers?.map((customer) => (
              <CardComponent
                key={customer.id}
                callback={() => navigate(`accounts/${customer.id}`)}
              >
                <CardBody>
                  <h3>{customer.userName}</h3>
                </CardBody>
              </CardComponent>
            ))}
            {nextPage > 1 && (
              <CardComponent
                callback={() => {
                  getClientsHandler(nextPage)
                }}
              >
                <CardBody>
                  <p className='next-card'>Más opciones &#187;</p>
                </CardBody>
              </CardComponent>
            )}
          </>
        ) : (
          <p>No hay clientes registrados</p>
        )}
      </div>
    </>
  )
}
export default HomePage
