// iniciando aqui o servidor 

import express from "express";
const app = express();


// usando o metodo GET

app.get('/', (req, res) =>{
    res.send('HOME');
})


app.listen(8080, () =>{
    console.log("Servidor ativado http://localhost:8080");
})