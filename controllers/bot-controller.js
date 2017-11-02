
//import model
const Messages = require('../models/Bot');

//declare ocntroller object
const botController = {};


//controller calls findAll method
//and renders returned data to admin.ejs
botController.index = (req, res) => {
    Messages.findAll()
    .then(messages => {
        res.render('admin', {messages});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
};

//controller calls update method and sends alert
botController.update = (req, res) => {
    Messages.update({
        name: req.body.name,
        message: req.body.message,
        id:req.params.id})
    .then(message => {
        alert('updated!!!')
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
};

//controller calls destroy method and sends alert
botController.delete = (req, res) => {
    Messages.destroy(req.params.id)
    .then(() => {
        alert('deleted!!!')
    })
    .catch(err => {
        res.status(500).json({
        err,
        });
    });
};

//export to use in other files
module.exports = botController;
