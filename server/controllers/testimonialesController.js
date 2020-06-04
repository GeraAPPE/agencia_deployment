const Testimonial = require('../models/Testimoniales');

exports.infoTestimoniales = async (req, res) => {
    const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales: testimoniales
        })
}

exports.agregarTestimonial = async (req, res) => {
    let {nombre, correo, mensaje} = req.body;

    let errores = [];
    if(!nombre) {
        errores.push({'mensaje' : 'Agrega tu Nombre'});
    }
    if(!correo) {
        errores.push({'mensaje' : 'Agrega tu Correo'});
    }
    if(!mensaje) {
        errores.push({'mensaje' : 'Agrega tu Mensaje'});
    }

    //Revisar por errores
    if(errores.length > 0) {
        //Muestra la vista con errores
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje,
            pagina: 'Testimoniales',
            testimoniales
        })
    } else {
        //Almacenarlo en la Base de Datos
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(testimonial => res.redirect('/testimoniales'))
        .catch(error => console.log(error));
    }
}