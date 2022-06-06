export const getAccountDetails = async (id, userId) => {
  const params = new URLSearchParams({ id, userId })
  const request = await window.fetch(
    `${process.env.REACT_APP_URL_BACKEND}/cuentas?${params}`
  )
  const data = await request.json()
  return { ...data }
}
