<template>
  <div class="home">
    <header class="hero">
      <h1>📝 File Management System</h1>
      <p class="greeting">{{ greeting }}</p>
      <p class="subtitle">Manage your notes with ease</p>
      
      <div class="actions">
        <router-link to="/notes" class="btn-primary">
          Get Started
        </router-link>
      </div>
    </header>
    
    <section class="features">
      <h2>Features</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <span class="icon">✍️</span>
          <h3>Create Notes</h3>
          <p>Write and save your thoughts</p>
        </div>
        <div class="feature-card">
          <span class="icon">📋</span>
          <h3>View All Notes</h3>
          <p>See all your notes at a glance</p>
        </div>
        <div class="feature-card">
          <span class="icon">✏️</span>
          <h3>Edit & Update</h3>
          <p>Modify your notes anytime</p>
        </div>
        <div class="feature-card">
          <span class="icon">🗑️</span>
          <h3>Delete Notes</h3>
          <p>Remove notes you no longer need</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      username: 'TigerXpro' // You can make this dynamic later
    }
  },
  computed: {
    greeting() {
      const hour = new Date().getHours()
      let timeGreeting = ''
      
      if (hour < 12) {
        timeGreeting = 'Good morning'
      } else if (hour < 17) {
        timeGreeting = 'Good afternoon'
      } else {
        timeGreeting = 'Good evening'
      }
      
      return `${timeGreeting}, ${this.username}! 👋`
    }
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  padding: 2rem;
}

.hero {
  text-align: center;
  padding: 4rem 0;
  background: white;
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  max-width: 1450px;
  margin: 0 auto 3rem auto;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.greeting {
  font-size: 1.3rem;
  color: #3498db;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.subtitle {
  font-size: 1.1rem;
  color: #7f8c8d;
  margin-bottom: 2rem;
}

.btn-primary {
  display: inline-block;
  background: #3498db;
  color: white;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: background 0.3s ease;
}

.btn-primary:hover {
  background: #2980b9;
}

.features {
  max-width: 1200px;
  margin: 0 auto;
}

.features h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  background: white;
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  text-align: center;
}

.icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.5rem;
}

.feature-card h3 {
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.feature-card p {
  color: #7f8c8d;
  font-size: 0.9rem;
}

/* Responsive design */
@media (max-width: 768px) {
  .home {
    padding: 1rem;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>