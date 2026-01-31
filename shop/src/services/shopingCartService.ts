const API_BASE_URL = 'http://localhost:8080/api/cart'

export const CartService = {
  getCart: async (userId: number) => {
    const response = await fetch(`${API_BASE_URL}/${userId}`)
    if (!response.ok) throw new Error('Error al cargar el carrito')
    return await response.json()
  },

  updateItem: async (userId: number, productId: number, quantity: number) => {
    const response = await fetch(`${API_BASE_URL}/update`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, productId, quantity }) // Esto será pulido cuando tenga las DTO
    })
    return await response.json()
  },

  removeItem: async (userId: number, productId: number) => {
    await fetch(`${API_BASE_URL}/${userId}/${productId}`, {
      method: 'DELETE'
    })
  }
}