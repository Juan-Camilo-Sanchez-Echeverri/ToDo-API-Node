const express = require("express");
const morgan = require("morgan");
const path = require('path');
const app = express();

/*DB Connection*/

const { mongoose } = require('./database.js');

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Enable Cross-Origin Resource Sharing (CORS)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Permitir acceso desde cualquier origen
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Métodos HTTP permitidos
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Encabezados permitidos
    next();
});

// Routes
app.use('/', require('./routes/tasks.routes.js'));

// Starting Server
app.listen(3000, () => {
    console.log(`Starting server on port ${app.get("port")}`);
});
