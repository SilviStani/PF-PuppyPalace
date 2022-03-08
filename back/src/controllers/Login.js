const {User, Pet, Vaccine}= require ('../db.js');

////////////////////////////////////////////////////////////////////////////////////////////
// FUNCIONES

function login(email, password, callback) {
/*    //this example uses the "pg" library
    //more info here: https://github.com/brianc/node-postgres
  
    const bcrypt = require('bcrypt');
    const postgres = require('pg');
  
    const conString = 'postgres://user:pass@localhost/mydb';
    postgres.connect(conString, function (err, client, done) {
      if (err) return callback(err);
  
      const query = 'SELECT id, nickname, email, password FROM users WHERE email = $1';
      client.query(query, [email], function (err, result) {
        // NOTE: always call `done()` here to close
        // the connection to the database
        done();
  
        if (err || result.rows.length === 0) return callback(err || new WrongUsernameOrPasswordError(email));
  
        const user = result.rows[0];
  
        bcrypt.compare(password, user.password, function (err, isValid) {
          if (err || !isValid) return callback(err || new WrongUsernameOrPasswordError(email));
  
          return callback(null, {
            user_id: user.id,
            nickname: user.nickname,
            email: user.email
          });
        });
      });
    });*/
  }


/*const login = async (req , res , next) =>{
    try{
        const {

            userName,
            password,

        }
        =req.body;

        const user = await User.findOne({
            where:{
                userName,

            }
        });
        if(!user) return res.status(404).send({error: "usuario no encontrado"});
        if(user.password !== password) return res.status(401).send({error: "contraseña incorrecta"});

        if(user.password === password) return res.status(200).send(user);

    }catch (error){
    next(error)
    }

}*/

module.exports = {login}