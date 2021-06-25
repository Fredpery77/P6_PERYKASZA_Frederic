const express = require ('express');
const router = express.Router();
const auth = require('../middleware/auth');
const sauceCtrl = require ('../controllers/sauce');
const security = require('../middleware/securiry');

const multer = require('../middleware/multer-config');

router.post('/', auth, multer, sauceCtrl.createSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.get('/', auth, sauceCtrl.getAllSauces);
router.put('/:id', auth, security.checkJWT, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, security.checkJWT, sauceCtrl.deleteSauce);
router.post('/:id/like', auth, sauceCtrl.likeOrDislikeSauce);

module.exports = router;