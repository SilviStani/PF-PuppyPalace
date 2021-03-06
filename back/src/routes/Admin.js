const {Router} = require('express');
const AdminClinics = require ('./AdminClinics.js');
const AdminUsers = require ("./AdminUser.js");
const AdminReviews = require('./AdminReviews.js');

const router= Router();

router.use('/clinics', AdminClinics);
router.use('/users', AdminUsers);
router.use('/reviews', AdminReviews);

module.exports = router;