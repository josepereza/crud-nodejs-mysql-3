const express = require("express");
const path = require("path");
const morgan = require("morgan"); //Para ver las peticiones HTTP 
const mysql = require("mysql");
const myConnection = require("express-myconnection");

const app = express();

//Importando rutas
const customerRoutes = require("./routes/customer");

//Settings
app.set("port", process.env.PORT || 3000);
app.set("view engine","ejs"); //Seteo el motor de plantillas predeterminado
    //Utilizo modulo path
app.set('views', path.join(__dirname,'views')); 

//Middlewares  funciones que se ejecutan antes de las peticiones de los usuarios, es decir las rutas.
app.use(morgan("dev"));
    //Iniciar conexion al servidor con la base de datos (?)
app.use(myConnection(mysql, {
    host: "localhost",
    user: "jose",
    password: "12345Seis",
    port: 3306,
    database: "crudnodejsmysql"
}, "single"));
app.use(express.urlencoded({extended: false})); //Para entender los datos del form, exteded false porque los datos no son complicados, solo texto



//Routes o rutas -->  el slash es la ruta inicial.
app.use("/", customerRoutes);


//Statics Files .. Imagenes frameworks css etc
app.use(express.static(path.join(__dirname, "public")));


//Empezando el servidor
//Para iniciar servidor abrir xamp sql y por consola npm run dev
//Para iniciar base de datos por consola mysql -u root -p

app.listen(app.get("port"), () => {
    console.log("Server on port 3000");
});
