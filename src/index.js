const express = require("express");
const morgan = require("morgan");
const path = require('path');
const app = express();

/*DB Connection*/

const { mongoose } = require('./database.js');

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewars
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks', require('./routes/tasks.routes.js'));


//Static Files
app.use(express.static(path.join(__dirname, 'public')));;

//Starting Server
app.listen(3000, () => {
    console.log(`Starting server on port ${app.get("port")}`);
});
