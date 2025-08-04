<template>
  <div class="notes-view">
    <header class="notes-header">
      <h1>📝 Your Notes</h1>
      <router-link to="/" class="back-link">← Back to Home</router-link>
    </header>
    
    <main class="notes-main">
      <!-- Move your NoteForm and NoteList components here -->
      <NoteForm 
        :note="editingNote"
        :isEditing="!!editingNote"
        @submit="handleNoteSubmit"
        @cancel="cancelEdit"
      />
      
      <NoteList 
        :notes="notes"
        @edit="startEdit"
        @delete="handleDelete"
      />
    </main>
  </div>
</template>

<script>
import { api } from '../services/api.js'
import NoteForm from '../components/NoteForm.vue'
import NoteList from '../components/NoteList.vue'

export default {
  components: {
    NoteForm,
    NoteList
  },
  data() {
    return {
      notes: [],
      editingNote: null
    }
  },
  async mounted() {
    await this.loadNotes()
  },
  methods: {
    async loadNotes() {
      try {
        this.notes = await api.getNotes()
      } catch (error) {
        console.error('Error loading notes:', error)
      }
    },
    async handleNoteSubmit(noteData) {
      try {
        if (this.editingNote) {
          await api.updateNote(this.editingNote.id, noteData)
          this.editingNote = null
        } else {
          await api.createNote(noteData)
        }
        await this.loadNotes()
      } catch (error) {
        console.error('Error saving note:', error)
      }
    },
    startEdit(note) {
      this.editingNote = { ...note }
    },
    cancelEdit() {
      this.editingNote = null
    },
    async handleDelete(id) {
      try {
        await api.deleteNote(id)
        if (this.editingNote && this.editingNote.id === id) {
          this.editingNote = null  // This will trigger the form to clear
        }
        await this.loadNotes()
      } catch (error) {
        console.error('Error deleting note:', error)
      }
    }
  }
}
</script>

<style scoped>
.notes-view {
  min-height: 100vh;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.notes-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1.5rem 0;
  border-bottom: 2px solid #e9ecef;
}

.notes-header h1 {
  color: #2c3e50;
  font-size: 2rem;
  margin: 0;
}

.back-link {
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.back-link:hover {
  background-color: #3498db;
  color: white;
}

.notes-main {
  display: grid;
  gap: 2rem;
}

/* Responsive design */
@media (max-width: 768px) {
  .notes-view {
    padding: 1rem;
  }
  
  .notes-header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .notes-header h1 {
    font-size: 1.5rem;
  }
}
</style>