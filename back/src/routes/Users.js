const {Router} = require ('express');
const Login = require ('./Login.js');
const Register = require ('./Register.js');
const Pets = require ('./Pets.js');
const Reserve = require('./Reserves.js')


const router = Router();


router.use('/login', Login);
router.use('/register', Register);
router.use('/pets', Pets);
router.use('/reserves', Reserve);


module.exports = router;

//- /user  POST---> /login
//          GET---> /login
//          POST---> /register
//          POST --> /pets
//          GET -->  /pets  