// const data = require("./db");

// const jsonServer = require("json-server");

// const server = jsonServer.create();

// const router = jsonServer.router(data);

// const middlewares = jsonServer.defaults();

// const port = process.env.PORT || 3001;

// server.use(middlewares);
// server.use(router);

// server.listen(port);






/* const express = require('express');

const server = express();

server.use(express.json());




const food = {
    "teste": [
        {
            "teste1": 2
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


server.delete("/food/:index", (req, res) => {
    const comida = comida.deleteOne({ _id: req.params.id }, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Comida não foi apagada com sucesso!"
        });
        return res.json({
            error: false,
            message: "Artigo apagado com sucesso!"
        });
    });
});



server.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`);
});
 */