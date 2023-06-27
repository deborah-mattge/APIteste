const express = require('express');
const routes = express.Router();
const Usuario = require('../models/usuario')
function createRoute(){
    routes.post('/usuarios', (req, res)=>{
        console.log(req.body);
        Usuario.create(req.body)
        res.json([]);
    });
}
function findAllRoute(){
    routes.get('/usuarios', (req, res)=>{
        res.json([]);
    });
}
function findByIdRoute(){
    routes.get('/usuarios/:meuParametro', (req, res)=>{
        console.log(req.params)
        res.json([]);
    });
}
function updatelRoute(){
    routes.put('/usuarios', (req, res)=>{
        console.log(req.body);
        res.json([]);
    });
}
function removeByIdRoute(){
    routes.delete('/usuarios/:meuParametro', (req, res)=>{
        console.log(req.params)
        res.json([]);
    });
}



function registraUsuariosRotas(){
    findAllRoute();
    createRoute();
    findByIdRoute();
    updatelRoute();
    removeByIdRoute()
    return routes;
}

module.exports = registraUsuariosRotas


