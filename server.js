const express = require('express');

const server = express();
server.use(express.json());


server.get('/', (req, res) => {
    return res.send(200).json({message: `Welcome to Customer POS system server`})
})

module.exports = server;