<template>
  <div class="notes-list">
    <h2>Saved Notes</h2>
    <div v-if="notes.length === 0" class="no-notes">
      No notes yet. Create your first note!
    </div>
    <div v-else class="notes-grid">
      <div v-for="note in notes" :key="note.id" class="note-card">
        <h3>{{ note.title }}</h3>
        <p>{{ note.content }}</p>
        <div class="note-actions">
          <button @click="editNote(note)">Edit</button>
          <button @click="deleteNote(note.id)" class="delete-btn">Delete</button>
        </div>
        <small>Created: {{ formatDate(note.createdAt) }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notes: Array
  },
  methods: {
    editNote(note) {
      this.$emit('edit', note)
    },
    deleteNote(id) {
      if (confirm('Are you sure you want to delete this note?')) {
        this.$emit('delete', id)
      }
    },
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString()
    }
  }
}
</script>

<style scoped>
.notes-list {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.notes-list h2 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.no-notes {
  text-align: center;
  padding: 3rem;
  color: #7f8c8d;
  font-size: 1.1rem;
}

.notes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.note-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #3498db;
  transition: all 0.3s ease;
}

.note-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.note-card h3 {
  color: #2c3e50;
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
  word-wrap: break-word;
}

.note-card p {
  color: #555;
  line-height: 1.5;
  margin-bottom: 1rem;
  word-wrap: break-word;
}

.note-actions {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.note-actions button {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.note-actions button:first-child {
  background: #f39c12;
  color: white;
}

.note-actions button:first-child:hover {
  background: #e67e22;
}

.delete-btn {
  background: #e74c3c !important;
  color: white !important;
}

.delete-btn:hover {
  background: #c0392b !important;
}

.note-card small {
  color: #7f8c8d;
  font-size: 0.8rem;
}

/* Responsive design */
@media (max-width: 768px) {
  .notes-list {
    padding: 1.5rem;
  }
  
  .notes-grid {
    grid-template-columns: 1fr;
  }
  
  .note-actions {
    flex-direction: column;
  }
  
  .note-actions button {
    width: 100%;
  }
}
</style>