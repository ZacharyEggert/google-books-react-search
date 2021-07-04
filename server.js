const path = require('path');

const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const routes = require('./routes');
require('dotenv').config();

const PORT = process.env.PORT || 5000

const store = new MongoDBStore({
    uri: process.env.MONGO_SESSION_URI || 'mongodb://localhost:27017/Books',
    collection:'sessions'
}, (error) => {error?console.error({error}):null;})

store.on('error', (error) => {
    console.error({error});
})

const app = express();

const sess = {
    secret : process.env.SECRET || 'secret_string',
    cookie: {},
    store,
    resave: false,
    saveUninitialized: false,
}
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {
    try{
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    }catch(err){
        console.error(err);
        res.status(500).json(err);
    }
});

app.listen(PORT, () =>{
    console.log('Listening on port ' + PORT);
});
