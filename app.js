const express = require('express')
const app = express();
require('dotenv').config();
const port = process.env.PORT;

const hbs = require('hbs');

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

// Servir contenido estatico
app.use(express.static('public')); // Al darle una carpeta de referencia, express buscara en esa carpeta y la priorizara sobre las demas periciones

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Diego Quijano',
        titulo: 'App de Node '
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Diego Quijano',
        titulo: 'App de Node '
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Diego Quijano',
        titulo: 'App de Node '
    })
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html') // Asi debe construirse un path absoluto para que sea reconocido en el navegador
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})