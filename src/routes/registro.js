const express = require('express');
const router = express.Router();

const registroController = require('../controllers/registroController')

router.get('/', registroController.lista);
router.post('/agregar', registroController.guardar);

router.get('/actualizar/:id', registroController.actualizar);
router.post('/actualizar/:id', registroController.actualizando);

router.get('/borrar/:id', registroController.borrar);

module.exports = router;