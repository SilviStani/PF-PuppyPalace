const {User, Pet, Vaccine, Reserve} = require ('../db.js');
const {isAuthUser} = require('../Utils/isAuth.js');

const getProfile = async (req, res, next) => {
    console.log(req.headers['authorization'])
    
try{
    const userId = isAuthUser(req);
    const user = await User.findByPk(userId, {
        include:[{model: Pet}, {model: Reserve}] 
    });

    res.json(user);
} catch (e){
    res.send({error: e});
}

}


module.exports = {
    getProfile
}