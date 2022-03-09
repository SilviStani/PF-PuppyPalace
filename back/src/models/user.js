const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define ('user', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },

        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, 
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        } ,

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$",'i'],
                notEmpty: true
            }
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$",'i'],
                notEmpty: true
            }
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate : {
                isEmail: true,
                notEmpty: true,
            }
        }, 

        password: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [8, 20], // longitud contraseña: sólo válida entre 8 y 20 caracteres 
                notEmpty: true,
            }
        },

        phone: {
            type: DataTypes.BIGINT,
            unique: true,
            allowNull: false,
            validate: {
                isNumeric: true,
                isInt: true,
                len: [10] // longitud: solo de 10 números, Sin 0 y sin 15 (incluye caracteristica provincia)
            }
        },

        address: {
            type: DataTypes.TEXT,
            allowNull: true,
            
        },

        province: {
            type: DataTypes.STRING,
            allowNull: false
        },

        city: {
            type: DataTypes.STRING,
            allowNull: false
        },

        image: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: "https://www.segurmaniazurekin.eus/a/2020/11/segurmania_mascotas_destacada-320x240.jpg",
            validate: {
                isUrl: true
            }
        },

    })
}
/* {
  nickname: 'luciano.stani97',
  name: 'luciano.stani97@live.com',
  picture: 'https://s.gravatar.com/avatar/337cfe7c9cf6492ff87a41e58c1497c4?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Flu.png',
  updated_at: '2022-03-08T21:14:51.355Z',
  email: 'luciano.stani97@live.com',
  email_verified: false,
  sub: 'auth0|6227c6049dc20b006892ff1d'
} */