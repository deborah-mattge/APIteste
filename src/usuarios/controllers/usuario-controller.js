const express = require('express');
const routes = express.Router();
const Usuario = require('../models/usuario');
const { sync } = require('../models/usuario');
function createRoute(){
    routes.post('/usuarios', (req, res)=>{
        console.log(req.body);
        Usuario.create(req.body)
        
        res.json([]);
    });
}
function findAllRoute(){
    routes.get('/usuarios', async (req, res)=>{
       res.json(await Usuario.findAll());
        
        
    });
}
 function findByIdRoute(){
    routes.get('/usuarios/:id', async (req, res)=>{
        console.log(req.params)
        const usuario = await Usuario.findOne({ where: { id: req.params.id } });
        if (usuario === null) {
          console.log('Not found!');
        } else {
            res.json(usuario.id)
          console.log(usuario instanceof Usuario); // true
          console.log(usuario.id); // 'My Title'
        }
    });
}
function updatelRoute(){
    routes.put('/usuarios', async(req, res)=>{
        const usuario = await Usuario.update(req.body,{
            where:{
                id:req.body.id

            }
        })
        res.json(req.body)
    });
}
function removeByIdRoute(){
    routes.delete('/usuarios/:id', async (req, res)=>{
        const usuario = await Usuario.destroy({ where: { id: req.params.id } });
        console.log(req.params)
        res.json(usuario);
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


