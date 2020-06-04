//importar Express
const express = require('express');
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');
const configs = require('./config');
const db = require('./config/database');

require('dotenv').config({ path: 'variables.env' });


db.authenticate()
    .then(() => console.log('DB Conectada'))
    .catch( error => console.log(error));


//Configurar Express
const app = express();

//Habilitar Pug
app.set('view engine', 'pug');

//Añadir las vistas
app.set('views', path.join(__dirname, './views'));

//Cargar una carpeta estatica llamada publica
app.use(express.static('public'))

//Validar si estamos en desarrollo o produccion
const config = configs[app.get('env')];

//Creamos la variables para el sitio web
app.locals.titulo = config.nombresitio;

//Muestra el Año Actual y genera la Ruta
app.use((req, res, next) => {
    //Crear una nueva Fecha
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;

    return next();
});

app.use(bodyParser.urlencoded({extended: true}));

//Cargar las rutas
app.use('/', routes());

//Puerto y HOST para la App
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;


app.listen(port, host, () => {
    console.log('El Servidor esta Funcionando');
});