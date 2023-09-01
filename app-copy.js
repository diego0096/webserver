const express = require('express')
const app = express()
const port = 8080;

app.set('view engine', 'hbs');

// Servir contenido estatico
app.use(express.static('public')); // Al darle una carpeta de referencia, express buscara en esa carpeta y la priorizara sobre las demas periciones

// app.get('/', function (req, res) {
//   res.send('Home page')
// })

app.get('/', function (req, res) {
  res.render('home');
})

app.get('/hola-mundo', function (req, res) {
  res.send('Hola mundo en su respectiva ruta')
})

app.get('/elements', function (req, res) {
  res.sendFile(__dirname + '/public/elements.html')
})

app.get('/generic', function (req, res) {
  res.sendFile(__dirname + '/public/generic.html')
})

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html') // Asi debe construirse un path absoluto para que sea reconocido en el navegador
})

// app.listen(8080)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})