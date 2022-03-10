const { Router } = require ('express');
const { postReserve, getReserve, getReserveId } = require("../controllers/Reserve.js");

const router = Router();

router.post('/', postReserve);
router.get('/', getReserve);
router.get('/:id', getReserveId);

module.exports = router;