
const express      = require('express');
const path         = require('path');
const morgan       = require('morgan');
const mysql        = require('mysql');
const myconnection = require('express-myconnection');

const app = express();

// Import Router
const  registroRutas = require('./routes/registro');

// Configuracion
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares 
app.use(morgan('dev'));
app.use(myconnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'evaluacion'
}, 'single'));

// requerir metodos desde formularios
app.use(express.urlencoded({extended: false}));

// Routers
app.use('/', registroRutas);

//archivos estaticos
app.use(express.static(path.join(__dirname, 'views')));

app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});
