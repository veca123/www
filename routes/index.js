var express = require('express');
const cli = require('../funcoes/clientes')
var router = express.Router();

/* GET home page. Pagina inicial*/ 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pagina Inicial' });
});

router.get('/teste', function(req, res, next) {
  console.log('ele acessou a rota de teste')
  res.render('teste', { title: 'Pagina de teste' });
});

router.get('/clientes', function(req, res, next) {
  cli.enviaClientes(req, res)
});

router.post('/clientes', function(req, res, next) {
  cli.recebeClientes(req, res)
});
module.exports = router;
