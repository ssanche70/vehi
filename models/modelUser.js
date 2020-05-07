const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'usuario',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: Sequelize.STRING
    },
    apellido: {
      type: Sequelize.STRING
    },
    cedula: {
      type: Sequelize.STRING
    },
    telefono: {
      type: Sequelize.INTEGER
    },
    dirreccion: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.INTEGER
    },
    f_creacion: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
  {
    timestamps: false
  }
)
