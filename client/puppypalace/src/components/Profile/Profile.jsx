import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { getProfile } from '../../redux/actions';

export default function Profile() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.token);
    const user = useSelector(state => state.user)
    useEffect(() =>{
        dispatch(getProfile(token));
    },[dispatch])
    
    return (
        <div>
            <img src='https://pm1.narvii.com/6650/1e1210b9c20ad495d949496e77b195597813315f_hq.jpg' width = '100px' height='100px'/>
            <p>Nombre de Usurario:{user.userName} </p>
            <p>Nombres:{user.name} {user.lastName} </p>
            <p>Direccion:{user.address} </p>
            <Link to ='createPet'>
            <button >Crear mascota</button>
            </Link>
        </div>
    )
}
