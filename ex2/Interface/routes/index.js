var express = require('express');
var router = express.Router();
var axios = require("axios")

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get("http://localhost:15030/plantas")
    .then(dados=>{
      res.render('plantasDB', { plantas: dados.data });
    })
    .catch(erro=>{
      res.render('error', { error: erro,message:"Erro a obter lista de plantas" });
    })
});

router.get('/:id', function(req, res, next) {
  axios.get("http://localhost:15030/plantas/"+req.params.id)
      .then(dados=>{
        //console.log(JSON.stringify(dados))
        res.render('pagPlanta', { planta: dados.data });
      })
      .catch(erro=>{
        res.render('error', { error: erro,message:"Erro a obter o perfil da planta" });    
      })

  
});

router.get('/especies/:id', function(req, res, next) {
  axios.get("http://localhost:15030/plantas?especie="+req.params.id)
      .then(dados=>{
        res.render('especiesDB', { plantas: dados.data });
      })
      .catch(erro=>{
        res.render('error', { error: erro,message:"Erro a obter o perfil da espécie" });        
      })
});

module.exports = router;
