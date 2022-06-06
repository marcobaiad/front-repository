import './sidebar.css'
import { Link } from 'react-router-dom'

const SidebarComponent = ({ toggleModal, toggleOpen }) => {
  return (
    <div
      id='mySidenav'
      className='sidenav'
      style={{
        width: toggleOpen ? '250px' : '0',
      }}
    >
      <div className='closebtn' onClick={toggleModal}>
        &times;
      </div>
      <Link to='/' onClick={toggleModal}>
        Inicio
      </Link>
    </div>
  )
}
export default SidebarComponent
