<template>
  <form @submit.prevent="handleSubmit" class="note-form">
    <div>
      <label for="title">Title:</label>
      <input 
        id="title"
        v-model="form.title" 
        type="text" 
        required 
        maxlength="100"
      />
    </div>
    <div>
      <label for="content">Content:</label>
      <textarea 
        id="content"
        v-model="form.content" 
        required
        rows="4"
      ></textarea>
    </div>
    <button type="submit">{{ isEditing ? 'Update' : 'Create' }} Note</button>
    <button v-if="isEditing" @click="cancelEdit" type="button">Cancel</button>
  </form>
</template>

<script>
export default {
  props: {
    note: Object,
    isEditing: Boolean
  },
  data() {
    return {
      form: {
        title: '',
        content: ''
      }
    }
  },
  watch: {
    note: {
      handler(newNote) {
        if (newNote) {
          this.form = { ...newNote }
        }
      },
      immediate: true
    },
    isEditing: {
      handler(newVal) {
        if (!newVal) {
          this.form = { title: '', content: '' }
        }
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', { ...this.form })
      if (!this.isEditing) {
        this.form = { title: '', content: '' }
      }
    },
    cancelEdit() {
      this.form = { title: '', content: '' }  
      this.$emit('cancel')
    }
  }
}
</script>

<style scoped>
.note-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.note-form > div {
  margin-bottom: 1.5rem;
}

.note-form label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #2c3e50;
  font-size: 0.9rem;
}

.note-form input,
.note-form textarea {
  width: 100%;
  padding: 12px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.note-form input:focus,
.note-form textarea:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

.note-form textarea {
  resize: vertical;
  min-height: 120px;
}

.note-form button {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 1rem;
}

.note-form button[type="submit"] {
  background: #27ae60;
  color: white;
}

.note-form button[type="submit"]:hover {
  background: #229954;
  transform: translateY(-1px);
}

.note-form button[type="button"] {
  background: #95a5a6;
  color: white;
}

.note-form button[type="button"]:hover {
  background: #7f8c8d;
}

/* Responsive design */
@media (max-width: 768px) {
  .note-form {
    padding: 1.5rem;
  }
  
  .note-form button {
    width: 100%;
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
}
</style>