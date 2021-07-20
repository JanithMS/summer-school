const express = require("express");

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
 return res.send("Welcome to summer school");
})

app.post('/api/products', (req, res) => {
    console.log(req.body.title);
    return res.send("Api working fine");
});

app.get('/api/products', (req, res) => {
    return res.status(200).send({"title": "Summer school", "date": "20-07-2021"});
})

app.get('/api/products/:id', (req, res) => {
    return res.send("");
});

app.patch('/api/products/:id', (req, res) => {
    console.log(req.params.id);
    return res.status(200).send("");
})

app.delete('/api/products/:id', (request, response) => {
    return response.send("");
})

app.listen(3000, () => {console.log("Lisenting on Port 3000")})