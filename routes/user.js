const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

const verifyPassword = require ('../middleware/verifyPassword');

//création des différentes routes de l'API en leurs précisant, dans l'ordre, leurs middlewares
router.post('/signup', verifyPassword, userCtrl.signup);
router.post('/login', userCtrl.login);


module.exports = router;
