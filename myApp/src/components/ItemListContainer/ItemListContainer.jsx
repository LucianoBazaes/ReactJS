import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';


import ItemList from '../ItemList/ItemList';
import ItemCount from '../ItemCount/ItemCount';


import './itemListContainer.css'

  const productos = [
                    { id: '1', nombre: 'Musculosa Boston Celtics', precio: '50 USD', categoria: 'musculosas', image:'https://fanatics.frgimages.com/boston-celtics/womens-fanatics-branded-jayson-tatum-kelly-green-boston-celtics-fast-break-team-tank-jersey-icon-edition_pi3522000_ff_3522707-e98f133ac091fd7d23e0_full.jpg?_hv=2&w=340' },
                    { id: '2', nombre: 'T-Shirt Los Angeles Lakers', precio: '30 USD', categoria: 'remeras', image:'https://fanatics.frgimages.com/los-angeles-lakers/mens-nike-lebron-james-gold-los-angeles-lakers-icon-2022/23-name-and-number-t-shirt_pi4656000_ff_4656877-6a4431bfbde2c04dc8d6_full.jpg?_hv=2&w=340'},
                    { id: '3', nombre: 'Gorra Chicago Bulls', precio: '20 USD', categoria: 'gorras', image:'https://fanatics.frgimages.com/chicago-bulls/mens-new-era-maroon-chicago-bulls-2022/23-city-edition-alternate-logo-59fifty-fitted-hat_pi4824000_ff_4824688-3bbeaec6486e0b1015d6_full.jpg?_hv=2&w=340'},
                    { id: '4', nombre: 'Buzo Golden State Warriors', precio: '35 USD', categoria:'buzos', image:'https://fanatics.frgimages.com/golden-state-warriors/mens-fanatics-branded-royal/gold-golden-state-warriors-attack-colorblock-pullover-hoodie_pi4643000_ff_4643944-79ce408b1102187e1f9b_full.jpg?_hv=2&w=340'}
                  ];


  const itemListContainer = () => {

//Creo un estado
  const [infoCard, setInfoCard] = useState([]);

  const { categoriaId } = useParams();

//Dentro del useEffect, que es donde realizo peticiones y me realiza un re-render, creo una promesa con simulacion de demora

  useEffect( () => {
     const getInfo = new Promise((resolve) => {

      setTimeout( () => {
          resolve(productos);
      }, 1000)   
    });
    
     if(categoriaId) {
      getInfo.then(res => setInfoCard(res.filter(producto => producto.categoria === categoriaId)));
  } else {
      getInfo.then(res => setInfoCard(res)); //VER
  }

 },[categoriaId]);  
  

    return (
      <div>       
          <ItemList infoCard={infoCard} />
            
      </div>
    )
  }
export default itemListContainer