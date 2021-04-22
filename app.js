const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

const sauceRoutes = require('./routes/sauce.js');
const userRoutes = require('./routes/user.js');

require('dotenv').config()

const App = {
  host: process.env.APP_HOST,
  port: process.env.APP_PORT
}

const db = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
}

console.log(App, db);

mongoose.connect(`mongodb+srv://fredpery77:SLu7pzhPMD48mMyV@cluster0.w9o3d.mongodb.net/cluster0?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  app.use(bodyParser.json());

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

    
  app.use('/images', express.static(path.join(__dirname, 'images')));

  app.use('/api/sauces', sauceRoutes);
  app.use('/api/auth', userRoutes);

   
module.exports = app;