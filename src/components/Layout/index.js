import { useState } from 'react'
import './layout.css'
import HeaderComponent from '../Header'
import SidebarComponent from '../Sidebar'

const LayoutCompoent = ({ children }) => {
  const [toggleOpen, setToggleOpen] = useState(false)

  const toggleModal = () => setToggleOpen(!toggleOpen)

  return (
    <>
      <HeaderComponent toggleModal={toggleModal} />
      <SidebarComponent toggleModal={toggleModal} toggleOpen={toggleOpen} />
      <main
        className='main-content'
        style={{
          // overflow: toggleOpen ? 'hidden' : 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginInline: 'auto',
        }}
      >
        <div style={{ maxWidth: '90vw' }}>{children}</div>
      </main>
    </>
  )
}
export default LayoutCompoent
