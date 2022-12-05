//import { async } from "@firebase/util";

import { async } from "@firebase/util";

const API_URL='http://127.0.0.1:8000/usuarios';

export const listUsuarios = async ()=>{
    return await fetch(API_URL);
};

export const registerUsuario = async (newUsuario) => {
    return await fetch(API_URL,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "id":parseInt(newUsuario.id),
            "dni":parseInt(newUsuario.dni),
            "nombre":String(newUsuario.nombre).trim(),
            "apellidos":String(newUsuario.apellidos).trim(),
            "correo":String(newUsuario.correo).trim(),
            "celular":parseInt(newUsuario.celular),
            "direccion":String(newUsuario.direccion).trim(),
            "distrito":String(newUsuario.distrito).trim(),
            "genero":String(newUsuario.genero).trim(),
        })
    })
}

export const deleteUsuario = async (userId) => {
    return await fetch(`${API_URL}/${userId}`,{
        method:'DELETE',
    })
}