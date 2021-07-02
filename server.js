const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./routes');
require('dotenv').config();

const PORT = process.env.PORT || 5000



const app = express();

const sess = {
    secret : process.env.SECRET || 'secret_string',
    cookie: {},
    resave: false,
    saveUninitialized: false,
}
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () =>{
    console.log('Listening on port ' + PORT);
});
