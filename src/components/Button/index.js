const ButtonComponent = ({ buttonProps, children }) => {
  return (
    <button style={{ cursor: 'pointer' }} {...buttonProps}>
      {children}
    </button>
  )
}
export default ButtonComponent
