const { Router } = require ('express');
const { admindModProfile , adminKillUser, admindGetProfile, admindGetProfileId } = require("../controllers/UserAdmins.js");

const router = Router();

router.get('/', admindGetProfile)
router.get('/:id', admindGetProfileId)
router.put('/:id', admindModProfile);
router.delete('/:id', adminKillUser);

module.exports = router;