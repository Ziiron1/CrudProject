const express = require('express');

const server = express();

server.use(express.json());

const food = {
    "produtos": [
        {
            "id": 2,
            "nome": "X-Búrguer",
            "descricao": "Pão, bife de hambúrguer 90g, 1 fatia de queijo, salada e batata.",
            "preco": 10.5,
            "categoria_id": 1
        },
        {
            "id": 3,
            "nome": "X-Bacon",
            "descricao": "Pão, bife de hambúrguer 90g, 1 fatia de queijo, 2 fatia de bacon, salada e batata.",
            "preco": 12.5,
            "categoria_id": 1
        },
        {
            "id": 4,
            "nome": "X-Tudo",
            "descricao": "Pão, 2 bifes de hambúrguer 90g, 2 fatias de queijo, 4 fatias de bacon, salada e batata.",
            "preco": 14.5,
            "categoria_id": 1
        },
        {
            "id": 5,
            "nome": "Coca cola 350ml",
            "descricao": "",
            "preco": 5.5,
            "categoria_id": 2
        },
        {
            "id": 6,
            "nome": "Coca cola 600ml",
            "descricao": "",
            "preco": 7.5,
            "categoria_id": 2
        },
        {
            "id": 1,
            "nome": "Hambúrguer",
            "descricao": "Pão, bife de hambúrguer 90g, salada e batata.",
            "preco": 8.5,
            "categoria_id": 1
        }
    ],
    "categorias": [
        {
            "id": 1,
            "nome": "Hambúrgueres"
        },
        {
            "id": 2,
            "nome": "Refrigerantes"
        }
    ]
};


// CRUD --> Create, Read, Update, Delete

// Retorna uma Refeição
server.get('/food/:index', (req, res) => {
    const { index } = req.params

    return res.json(food[index])
});

// Retornar todas as refeições
server.get('/food', (req, res) => {

    return res.json(food)
});

// Criar uma nova 
server.post('/food', (req, res) => {
    const { name } = req.body;
    food.push(name);

    return res.json(food);
});

// Atualizar um curso
server.put('/food/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    food[index] = name;

    return res.json(food);
});

// Deletar um curso
server.delete('/food/:index', (req, res) => {
    const { index } = req.params;

    food.splice(index, 1);
    return res.json({ message: "O curso foi deletado" });
})


server.listen(3001);