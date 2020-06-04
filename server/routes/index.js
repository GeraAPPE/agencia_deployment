const express = require('express');
const router = express.Router();

const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');


module.exports = function() {

    router.get('/', homeController.consultasHomePage)
    router.get('/nosotros', nosotrosController.infoNosotros);
    router.get('/viajes', viajesController.infoViajes);
    router.get('/viajes/:id', viajesController.infoViaje);
    router.get('/testimoniales', testimonialesController.infoTestimoniales);
    //Cuando se llena el formulario
    router.post('/testimoniales', testimonialesController.agregarTestimonial);

    return router;
}