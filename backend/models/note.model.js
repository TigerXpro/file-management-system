const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Note = sequelize.define('Note', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Title is required'
      },
      len: {
        args: [1, 100],
        msg: 'Title must be between 1 and 100 characters'
      }
    }
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Content is required'
      }
    }
  }
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt
  tableName: 'notes'
});

module.exports = Note;