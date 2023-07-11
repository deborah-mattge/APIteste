const express = require('express');
const routes = express.Router();
const Usuario = require('../models/usuario');
const { sync } = require('../models/usuario');
const cardPermissions = require('../models/cardPermissions');
const propertyPermissions = require('../models/propertyPermissions');
function createRoute(){
    routes.post('/usuarios', (req, res)=>{
        console.log(req.body);
        Usuario.create(req.body)
        
        res.json([]);
    });
}
function createRouteCard(){
    routes.post('/cardPermissions', (req, res)=>{
        console.log(req.body);
        cardPermissions.create(req.body)
        
        res.json([]);
    });
}
function createRouteProperty(){
    routes.post('/propertyPermissions', (req, res)=>{
        console.log(req.body);
        propertyPermissions.create(req.body)
        
        res.json([]);
    });
}
function findAllRoute(){
    routes.get('/usuarios', async (req, res)=>{
       res.json(await Usuario.findAll());
        
        
    });
}
    function findAllRouteCard(){
        routes.get('/cardPermissions', async (req, res)=>{
           res.json(await cardPermissions.findAll());
            
            
        });
    }
        function findAllRouteProperty(){
            routes.get('/propertyPermissions', async (req, res)=>{
               res.json(await propertyPermissions.findAll());
                
                
            });
}
 function findByIdRouteCard(){
    routes.get('/cardPermissions/:id', async (req, res)=>{
        console.log(req.params)
        const usuario = await cardPermissions.findOne({ where: { id_user: req.params.id } });
        if (usuario === null) {
          console.log('Not found!');
        } else {
            res.json(usuario)
        //   console.log(usuario instanceof Usuario); // true
        //   console.log(usuario.id); // 'My Title'
        }
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
function findByIdRouteProperty(){
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
function updatelRouteCard(){
    routes.put('/usuarios', async(req, res)=>{
        const usuario = await Usuario.update(req.body,{
            where:{
                id:req.body.id

            }
        })
        res.json(req.body)
    });
}
function updatelRouteProperty(){
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
function removeByIdRouteCard(){
    routes.delete('/usuarios/:id', async (req, res)=>{
        const usuario = await Usuario.destroy({ where: { id: req.params.id } });
        console.log(req.params)
        res.json(usuario);
    });
}
function removeByIdRouteProperty(){
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
    removeByIdRoute();
    createRouteCard();
    createRouteProperty();
    findAllRouteCard();
    findAllRouteProperty();
    findByIdRouteCard();
    findByIdRouteProperty();
    updatelRouteCard();
    updatelRouteProperty();
    removeByIdRouteCard();
    removeByIdRouteProperty();
    return routes;
}

module.exports = registraUsuariosRotas


