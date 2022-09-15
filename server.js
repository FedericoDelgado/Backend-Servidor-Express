const express = require("express");

const Contenedor = require("./contenedor.js");

const app= express();

const productos = newContenedor();

app.get("/", (request, responde) =>{ 

    responde.send("servidor iniciado con express")

});

app.get("/productos", async (request, responde) =>{ 

    let pro = await productos.getAll();

    responde.send(pro);

});

app.get("/productosRandom", async (request, responde) =>{ 

    let Ran = await productos.getRandom();

    responde.send(Ran);

});

const server = app.listen(8080, ()=> {

console.log("servidor escuchando [localhost:8080/")

});