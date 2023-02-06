import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import Carrousel from '../Carrousel/Carrousel';


import './itemListContainer.css'




  const itemListContainer = () => {

//Creo un estado
  const [infoCard, setInfoCard] = useState([]);

  const { categoriaId } = useParams();

//Dentro del useEffect, que es donde realizo peticiones y me realiza un re-render, creo una promesa con simulacion de demora

  useEffect( () => {
    
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb,'productos')

    if(categoriaId) {
    const queryFiltro = query(queryCollection , 
      where('categoria', '==', categoriaId))
      getDocs(queryFiltro)
    .then(res => setInfoCard(res.docs.map((producto) => ({id: producto.id, ...producto.data()}))))
   } else {
    getDocs(queryCollection)
    .then(res => setInfoCard(res.docs.map((producto) => ({id: producto.id, ...producto.data()}))))
   }
 },[categoriaId]);  
  

    return (
     
      <div>  
          <Carrousel />         
          <ItemList infoCard={infoCard} />
            
      </div>
    )
  }
export default itemListContainer