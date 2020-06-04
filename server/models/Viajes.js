const Sequelize = require('sequelize');

const db = require('../config/database');

const Viaje = db.define('viaje', {
    titulo : {
        type: Sequelize.STRING
    },
    precio : {
        type: Sequelize.STRING
    },
    fecha_ida : {
        type: Sequelize.STRING
    },
    fecha_vuelta : {
        type: Sequelize.DATE
    },
    imagen : {
        type: Sequelize.DATE
    },
    descripcion : {
        type: Sequelize.STRING
    },
    disponibles : {
        type: Sequelize.STRING
    }
});

module.exports = Viaje;