import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'bootstrap';
import Navbar from '../components/Navbar/Navbar';
export function Mostrar() {
  const [series, setSeries] = useState([]);
  const [pos, setPos] = useState(null);
  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  useEffect(() => {
    axios.get('https://paseo-central.onrender.com/usuarios')
      .then(res => {
        console.log(res.data);
        setSeries(res.data);
      })
  })

  function mostrar(cod, Mostrar) {
    axios.get('https://paseo-central.onrender.com/usuarios' + cod)
      .then(res => {
        setPos(Mostrar);
        setId(res.data.id);
        setNombre(res.data.name);
        setFecha(res.data.release_date);
      })
  }
  return (
    <div>
      <Navbar/>
      <br/>
      <div className='container'>
        <table className='table'>
          <thead className='table-dark'>
            <tr>
              <th className='border border-solid border-2 border-green-600'>ID</th>
              <th className='border border-solid border-2 border-green-600'>DNI</th>
              <th className='border border-solid border-2 border-green-600'>NOMBRE</th>
              <th className='border border-solid border-2 border-green-600'>APELLIDO</th>
              <th className='border border-solid border-2 border-green-600'>CORREO</th>
              <th className='border border-solid border-2 border-green-600'>CELULAR</th>
              <th className='border border-solid border-2 border-green-600'>DISTRITO</th>
              <th className='border border-solid border-2 border-green-600'>GENERO</th>
              
              
            </tr>
          </thead>
          <tbody>
            {series.map((serie, Mostrar) => {
              return (
                <tr key={serie.id}>
                  <td className='border border-solid border-2 border-green-600'>{serie.id}</td>
                  <td className='border border-solid border-2 border-green-600'>{serie.dni}</td>
                  <td className='border border-solid border-2 border-green-600'>{serie.nombre}</td>
                  <td className='border border-solid border-2 border-green-600'>{serie.apellidos}</td>
                  <td className='border border-solid border-2 border-green-600'>{serie.correo}</td>
                  <td className='border border-solid border-2 border-green-600'>{serie.celular}</td>
                  <td className='border border-solid border-2 border-green-600'>{serie.distrito}</td>
                  <td className='border border-solid border-2 border-green-600'>{serie.genero}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
