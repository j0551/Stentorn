const express  = require('express')
const app = express();
const server = require('http').Server(app);
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
// här ligger uri:n till mongodb, men utan att lösen etc kommer synas här
require('dotenv/config');

app.use(bodyParser.json());

// import routes
const stonesRoute = require('./routes/stones');

app.use('/', stonesRoute);

app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.DB_CONNECTION,
  { useUnifiedTopology: true },
  () => console.log("connected db")
);

app.set("view engine", "ejs")
app.use(express.static("public"));

app.get("/", (req, res)=> {
    res.render("index");
});

server.listen(3030);
