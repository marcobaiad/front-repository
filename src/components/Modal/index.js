import { useRef } from 'react'
import './modal.css'
import ButtonComponent from '../Button'

const ModalComponent = ({ children, closeHandler }) => {
  const modalRef = useRef(null)
  const closeButton = useRef(null)

  window.onclick = function (event) {
    if (event.target === modalRef.current) {
      modalRef.current.style.display = 'none'
    }
  }

  return (
    <>
      <ButtonComponent
        buttonProps={{
          className: 'prev-page',
          style: {
            marginLeft: 'auto',
            marginRight: '100px',
          },
          onClick: () => {
            modalRef.current.style.display = 'block'
          },
        }}
      >
        Nueva transferencia
      </ButtonComponent>
      <div ref={modalRef} id='myModal' className='modal'>
        <div className='modal-content'>
          <span
            ref={closeButton}
            className='close'
            onClick={() => {
              modalRef.current.style.display = 'none'
              closeHandler()
            }}
          >
            &times;
          </span>
          {children}
        </div>
      </div>
    </>
  )
}
export default ModalComponent
