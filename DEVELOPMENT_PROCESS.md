# Development Process - File Management System

**Developer:** TigerXpro  
**Approach:** Backend-First Development  
**Tech Stack:** Node.js + Express + MySQL + Vue.js  

---

## Development Strategy

I chose a **backend-first approach** because I was more familiar with backend development. This allowed me to build a solid foundation before creating the UI and ensured the data layer worked perfectly before adding frontend complexity.

## Phase 1: Backend (Foundation)

### Why Start Here?
- More familiar with backend development
- Test CRUD operations independently  
- Define API contract early
- Ensure data persistence works
- Build confidence in core functionality

### What I Built:
```
backend/
├── server.js                # Express server setup
├── routers/
│   └── note.router.js       # Route definitions
├── controllers/             # Business logic handlers
├── models/                  # Database models with Sequelize
├── middleware/
│   └── error.middleware.js  # Error handling middleware
└── config/
    └── env.config.js        # Environment configuration
```

**Key Decisions:**
- **MySQL + Sequelize** - Structured data with built-in validation
- **RESTful API** - Standard GET/POST/PUT/DELETE endpoints  
- **Middleware Pattern** - Error handling and CORS setup
- **Environment Config** - Centralized configuration management
- **Router Separation** - Clean route organization

### API Testing:
Used **Insomnia** to verify all endpoints worked before building the UI.

## Phase 2: Frontend (User Interface)

### Component Strategy:
```
frontend/src/
├── components/
│   ├── NoteForm.vue   # Create/Edit form (dual mode)
│   └── NoteList.vue   # Display notes with actions
├── views/
│   ├── HomeView.vue   # Landing page with dynamic greeting
│   └── NotesView.vue  # Main CRUD interface
├── services/
│   └── api.js         # Centralized API calls
├── router/
│   └── index.js       # Vue Router configuration
└── assets/            # CSS and styling
```

**Key Decisions:**
- **Vue 3 + Vite** - Modern development experience with hot reload
- **Vue DevTools** - Added for development debugging
- **Component Separation** - Form, list, and container components
- **API Service Layer** - Centralized HTTP logic
- **CSS Custom Properties** - Vue's base styling system
- **Dynamic Greeting** - Time-based personalized welcome messages

## Phase 3: Integration & Testing

### Manual Testing Checklist:
- ✅ Create note with validation
- ✅ Edit existing notes  
- ✅ Delete with confirmation
- ✅ Empty state handling
- ✅ Responsive design
- ✅ Error scenarios
- ✅ Dynamic greeting functionality

## Final Result

A fully functional CRUD application that meets the requirements below:
- **Vue.js frontend** with responsive design and dynamic features
- **RESTful API** with proper middleware and error handling
- **MySQL database** with Sequelize ORM and data validation
- **Clean code organization** with proper separation of concerns
- **Environment configuration** for easy deployment