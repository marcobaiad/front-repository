import './card.css'

const CardComponent = ({ callback, children }) => {
  return (
    <div onClick={callback} className='card-component'>
      {children}
    </div>
  )
}
export default CardComponent
