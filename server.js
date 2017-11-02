console.log('connected')

//****************************************
//require ex, http, socket, port
let ex = require('express');
let app = ex();

let server = require('http').Server(app);
let socket = require('socket.io')(server);

const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');

let port = process.env.PORT || 3001

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(ex.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(cookieParser());

//****************************************

//import db & model
const db = require('./db/config');
const Messages = require('./models/Bot');

//query command to db to find all data
Messages.findAll = () => {
    return db.query('SELECT * FROM bot1 ORDER BY id ASC');
};

//****************************************

//decare varibles
let userCount = 0;
let botflag;
    botflag = false;

//on connection
socket.on('connection', (sock) => {

  //increment # of users connected to server and output to console
    userCount++;
    console.log(userCount + " users connected")

    //when received
    sock.on('message', (msg) =>{

        // emit message
        socket.emit('message', msg);
    });

    //if 3 users are connected evoke bot1 and trip flag
    if((userCount == 3) && (botflag == false))
    {
        //trip flag
        botflag = true;

        //find all data and emit
        Messages.findAll().then(messages => {
            socket.emit('bot',messages);
        });
    }
    else
    {
      //do nothing
    }

    //on disconnect
    sock.on('disconnect', (data) => {

        //decrement users connected to server and log to console
        userCount--;
        console.log(userCount + " users connected")
    })
});

//setup get index, use res.render
app.get('/', (req, res) => {
  res.render('index');
});

//render chat.ejs on path /chat
app.get('/chat', (req, res) => {
  res.render('chat');
});

//connect all bot routes to root url
const messages = require('./routes/bot-routes');
app.use('/', messages);


//setup listener
server.listen(port, () => {
  console.log('BAM!!!! 🤖 🤖 🤖 🤖 🤖')
})

