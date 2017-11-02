//requires
const express = require('express');
const chatRouter = express.Router();

//import controller
const botController = require('../controllers/bot-controller');

//the url that we want the index controller to render data to
chatRouter.get('/admin238476234629346', botController.index);

//the url that we want the update controller to render data to
chatRouter.put('/admin/:id', botController.update);

//the url that we want the delete controller to render data to
chatRouter.delete('/admin/:id', botController.delete);

//export for use in other files
module.exports = chatRouter;
