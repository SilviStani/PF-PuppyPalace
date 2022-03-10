const express = require ("express");

import mercadopago from "mercadopago";

export const prueba = async (req, res) =>{
    //TEST-5736859326855984-030919-3068332c358350e3d695e7b80420eefc-1087039959 token del vendedor

    mercadopago.configure({
        access_token: 'TEST-5736859326855984-030919-3068332c358350e3d695e7b80420eefc-1087039959'
    });
    
    var preference = {
      items: [
        {
          title: 'consulta',
          quantity: 1,
          currency_id: 'ARS',
          unit_price: 1
        }
      ],
      notification_url:"http://localhost:3001"
    };
    
    mercadopago.preferences.create(preference)
    .then((r)=>{
       res.json(r)
    }) 

    .catch((e)=>{
        console.log("error")
    })
 
}


export const notificacionprueba = async (req, res) =>{
    const datos = req.query;
    
    res.json(datos)

    res.status(200)
}