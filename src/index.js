'use strict'
const  express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

//inicio
const app=express();

//configuracion
app.set('port',process.env.PORT || 4000);

app.set('views',path.join(__dirname,'views'));

app.engine('.hbs', exphbs ({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine','.hbs');

//peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//variables globales
app.use((req,res,next)=>{
    next();
});

//rutas
app.use(require('./routes'));
app.use(require('./routes/autentication'));
app.use('/links',require('./routes/links'));
app.use('/CookGolden',require('./routes/bienvenida'));
app.use('/CookGolden',require('./routes/usuario'));
//app.use('/usuario',require('./routes/usuario'));
app.use('/CookGolden',require('./routes/administrador'));


//RUTAS DE LA API
app.use('/Api',require('./routes/api/usuarios'));
app.use('/Api',require('./routes/api/recetas'));





//public
app.use(express.static(path.join(__dirname,'public')));

//iniciar server
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});
