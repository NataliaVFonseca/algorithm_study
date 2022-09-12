
const {Router} = require('express');
const SumController = require('./sumController');
const RomansController = require('./romansController');

const routes = Router();

routes.get('/health', (req, res) => {
    return res.send({message: "Server in on!"})
});

routes.post('/sum', SumController.sum);
routes.post('/romans', RomansController.romans);




module.exports = routes;