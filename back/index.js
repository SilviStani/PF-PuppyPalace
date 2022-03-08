const server = require('./src/app.js');
const {Clinic} = require("./src/db.js");
const { conn } = require('./src/db.js');
const {clinicas} = require("./objectsClinics.js");
require('dotenv').config();
const { auth, requiresAuth } = require('express-openid-connect');

server.use(
  auth({
    authRequired: false,
    auth0Logout: true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
  })
);

server.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
})

server.get('/profile', requiresAuth(), (req, res) => {
  console.log(req.oidc.user);
  res.send(JSON.stringify(req.oidc.user))
})

const port = process.env.PORT || 3001;

const eraseDataBase = true;


// Syncing all the models at once.
conn.sync({ force: eraseDataBase }).then(() => {

  if(eraseDataBase){
    createClinics();
  }

  server.listen(port, () => {
    console.log( `%s listening at ${port}` ); // eslint-disable-line no-console
  });
});


const createClinics = async () =>{
  try {
    await Clinic.bulkCreate(clinicas);
  } catch (error){
    console.log(error);
    return (error);
  }
}
