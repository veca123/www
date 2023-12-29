const clientes = [
    {
        nome: 'Leandro',
        idade: 50,
        filhos: [
            {
                nome: 'Gabryella',
                idade: 30
            }
        ]
    },
    {
        nome: 'eduardo',
        idade: 23,
        filhos: []
    },
    {
        nome: 'henrique',
        idade: 9,
        filhos: []
    },
    {
        nome: 'Felipe',
        idade: 24,
        filhos: [
            {
                nome: 'Maria',
                idade: 0
            }
        ]
    },
    {
        nome: 'Celia',
        idade: 27,
        filhos: [
            {
                nome: 'Henrique',
                idade: 10
            }
        ]
    }
]

//console.log('o primeiro cadastro é ' + clientes[0].nome)
//console.log('Cujo a ideade é ' + clientes[0].idade)

function enviaClientes(req, res) {
    res.json(clientes)
}

function recebeClientes(req, res) {
    clientes.push(req.body)
    res.json(clientes)
}
module.exports = {
    enviaClientes,
    recebeClientes
}