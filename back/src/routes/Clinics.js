const { Router } = require ('express');
const { getClinics, postClinics, getClinicsId, postReserve, getReserve, getReserveId } = require("../controllers/Clinics.js");

const router = Router();

router.get('/', getClinics);
router.get('/:id', getClinicsId);
router.post('/', postClinics );
router.post('/reserve', postReserve);
router.get('/reserve', getReserve);
router.get('/reserve/:id', getReserveId);

module.exports = router;