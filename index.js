//Esto es una aplicacion de Node.js
//Crear un proyecto de Node.js: npm init -y
//Instalar express: npm i express
//Vamos a crear un servidor web con express **codigo** => Infraestructura como codigo

//Importar express
import express from 'express';
//Crear una aplicacion de express. A partir de ahora **app** es el servidor.
const app = express();
//Crear una ruta (post, get, put, delete) **peticiones** endpoint
//El endpoint tiene una ruta (nombre), dos parametros request (peticion) y response (respuesta)
//Request:  contiene la informacion de la peticion que hace el cliente
//Response: contiene la informacion que el servidor devuelve al cliente

const productos = [
    {id: 1, nombre: 'Producto 1', precio:123},//p  entonces tiene id, nombre, precio
    {id: 2, nombre: 'Producto 2',precio:456},
    {id: 3, nombre: 'Producto 3', precio:789}
]

app.get('/productos', (req, res)=>{
    res.status(200).send(productos)
})

//Crear una consulta usando JS para buscar un producto por id
app.get('/productos/:id',(req,res)=>{
    const id = req.params.id
    //find: busca en un arreglo
    //p representa cada producto de productos
    const producto = productos.find(p => p.id == id)
    res.status(200).json(producto)
})

//Crear una ruta para agregar un producto


const port=3800;
//La aplicacion usar este puerto
app.listen(port,()=>{console.log('Servidor escuchando en el puerto', port)})