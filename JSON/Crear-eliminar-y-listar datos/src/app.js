const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

// Settings o configuración del servidor
// Configuración del puerto de nuestra aplicación
app.set('port', 5000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares o programas intermedios
app.use(morgan('dev'));
// Los datos que vengan de nuestro formulario, los pasa a formato JSON
app.use(express.urlencoded({extended: false}));

// Routes o rutas
app.use(require('./routes/index'));

// Static o ficheros estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Error: 404 handler
app.use((req, res, next) => {
  res.status(404).send('404 no encontrado');
});

module.exports = app;

