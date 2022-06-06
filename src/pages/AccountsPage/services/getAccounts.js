export const getAccounts = async (userId, page) => {
  const params = new URLSearchParams({ userId, page })
  const request = await window.fetch(
    `${process.env.REACT_APP_URL_BACKEND}/cuentas?${params}`
  )
  const data = await request.json()
  return { ...data }
}
