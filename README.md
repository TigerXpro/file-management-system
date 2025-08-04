# 📝 File Management System

A modern, full-stack note management application built with Vue.js frontend and Node.js backend. Create, read, update, and delete your notes with an intuitive and responsive interface.

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=flat-square&logo=vue.js&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js&logoColor=white)

## ✨ Features

- **📝 Create Notes** - Write and save your thoughts with ease
- **📋 View All Notes** - See all your notes in a clean, organized list
- **✏️ Edit & Update** - Modify your notes anytime with inline editing
- **🗑️ Delete Notes** - Remove notes you no longer need
- **🌅 Dynamic Greeting** - Personalized time-based welcome messages
- **📱 Responsive Design** - Works perfectly on desktop and mobile devices
- **🎨 Modern UI** - Clean, professional interface with smooth animations
- **⚠️ Error Handling** - Robust error handling for all API operations

## 🛠️ Tech Stack

### Frontend
- **Vue.js 3** - Progressive JavaScript framework
- **Vue Router** - Official router for Vue.js
- **Vite** - Next generation frontend tooling
- **CSS3** - Modern styling with responsive design

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **Sequelize** - SQL ORM for database operations
- **MySQL** - Database for storing notes

## 🚀 Quick Start

### Prerequisites
- Node.js (v20.19.0 or higher)
- npm package manager
- MySQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TigerXpro/file-management-system.git
   cd file-management-system
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   
   # Create environment file
   cp .env.example .env
   # Edit .env with your database credentials
   
   # Start the backend server
   npm run dev
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   
   # Start the development server
   npm run dev
   ```

4. **Open your browser**
   ```
   Frontend: http://localhost:5173
   Backend API: http://localhost:3000
   ```

## 📁 Project Structure

```
file-management-system/
├── frontend/                    # Vue.js frontend application
│   ├── src/
│   │   ├── components/         # Reusable Vue components
│   │   │   ├── NoteForm.vue   # Form for creating/editing notes
│   │   │   └── NoteList.vue   # Display list of notes
│   │   ├── views/             # Page-level components
│   │   │   ├── HomeView.vue   # Landing page with features
│   │   │   └── NotesView.vue  # Main notes management page
│   │   ├── services/          # API communication
│   │   │   └── api.js         # HTTP client for backend
│   │   ├── router/            # Vue Router configuration
│   │   │   └── index.js       # Route definitions
│   │   ├── App.vue            # Root component
│   │   └── main.js            # Application entry point
│   ├── package.json           # Frontend dependencies
│   └── vite.config.js         # Vite configuration
├── backend/                    # Node.js backend API
│   ├── routes/                # API route handlers
│   ├── models/                # Database models
│   ├── package.json           # Backend dependencies
│   └── server.js              # Server entry point
└── README.md                  # This file
```

## 🎯 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update a specific note |
| DELETE | `/api/notes/:id` | Delete a specific note |

## 🔧 Development

### Available Scripts

#### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint with auto-fix
npm run format       # Format code with Prettier
```

#### Backend
```bash
npm run dev          # Start development server with nodemon
npm test             # Run tests (currently not configured)
```

## 🌟 Key Components

### NoteForm.vue
- Handles both create and edit modes
- Form validation with required fields and input limits
- Automatic form reset after operations

### NoteList.vue
- Displays notes in a responsive grid
- Edit and delete actions for each note
- Empty state handling

### NotesView.vue
- Orchestrates form and list components
- Manages note state and API calls with error handling
- Handles edit mode transitions

### HomeView.vue
- Dynamic greeting based on time of day
- Feature showcase with icons
- Responsive design for all devices

## 🔒 Environment Variables

Create `.env` file in the backend directory:

### Backend `.env`
```env
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=file_management_db
PORT=3000
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👨‍💻 Author

**TigerXpro**
- GitHub: [@TigerXpro](https://github.com/TigerXpro)

---

*This project was created as part of an internship application demonstrating full-stack web development skills with Vue.js and Node.js.*