const API_BASE_URL = 'http://localhost:3000/api'

export const api = {
  getNotes: async () => {
    const response = await fetch(`${API_BASE_URL}/notes`)
    return response.json()
  },
  
  createNote: async (noteData) => {
    const response = await fetch(`${API_BASE_URL}/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(noteData)
    })
    return response.json()
  },
  
  updateNote: async (id, noteData) => {
    const response = await fetch(`${API_BASE_URL}/notes/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(noteData)
    })
    return response.json()
  },
  
  deleteNote: async (id) => {
    const response = await fetch(`${API_BASE_URL}/notes/${id}`, {
      method: 'DELETE'
    })
    return response.json()
  }
}