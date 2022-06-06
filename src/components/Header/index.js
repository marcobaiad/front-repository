import './header.css'
import { Link } from 'react-router-dom'

const HeaderComponent = ({ toggleModal }) => {
  return (
    <header className='main-header'>
      <div />
      <div className='links-box'>
        <Link to='/'>Inicio</Link>
      </div>
      <div>
        <div className='menu-button' onClick={toggleModal}>
          &#9776;
        </div>
      </div>
    </header>
  )
}
export default HeaderComponent
