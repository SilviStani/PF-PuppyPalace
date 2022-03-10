const {Router} = require ('express');
import { prueba } from '../controllers/mercancia';
import { notificacionprueba } from '../controllers/mercancia';

const router = Router();


router.post('/pruebamercado', prueba );

router.post("/notificacion", notificacionprueba )

module.exports = router;