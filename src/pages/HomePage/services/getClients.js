export const getClients = async (page) => {
  const nextPage = new URLSearchParams({ page })
  const result = await window.fetch(
    `${process.env.REACT_APP_URL_BACKEND}/clientes?${page ? nextPage : ''}`
  )
  const data = await result.json()
  return { ...data }
}
