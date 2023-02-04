import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';


import ItemList from '../ItemList/ItemList';
import Carrousel from '../Carrousel/Carrousel';


import './itemListContainer.css'

const productos = [
  { id: '1', nombre: 'Musculosa Boston Celtics Titular', precio: 50, categoria: 'musculosas', description: 'Musculosa de Jayson Tatum, jugador de los Boston Celtics, UNISEX, talle a partir del S hasta XXXL.', image:'https://fanatics.frgimages.com/boston-celtics/womens-fanatics-branded-jayson-tatum-kelly-green-boston-celtics-fast-break-team-tank-jersey-icon-edition_pi3522000_ff_3522707-e98f133ac091fd7d23e0_full.jpg?_hv=2&w=340' },
  { id: '2', nombre: 'Musculosa Boston Celtics Alternativa', precio: 50, categoria: 'musculosas', description: 'Camiseta de Jayson Tatum, jugador de los Boston Celtics, UNISEX, talle a partir del S hasta XXXL.', image:'https://images.footballfanatics.com/boston-celtics/unisex-nike-jayson-tatum-white-boston-celtics-2022/23-swingman-jersey-association-edition_pi4650000_ff_4650293-99cb2bf9734e84e51cc9_full.jpg?_hv=2&w=340'},
  { id: '3', nombre: 'Musculosa Boston Celtics Retro', precio: 120, categoria: 'musculosas', description: 'Musculosa de Kevin Garnett, exjugador de los Boston Celtics, UNISEX, talle a partir del S hasta XXXL.', image:'https://images.footballfanatics.com/boston-celtics/mens-mitchell-and-ness-kevin-garnett-black/kelly-green-boston-celtics-hardwood-classics-2007-08-split-swingman-jersey_pi5115000_ff_5115857-d0d0182ce04711700957_full.jpg?_hv=2&w=340'},
  { id: '4', nombre: 'Musculosa Boston Celtics Titular', precio: 50 , categoria:'musculosas', description: 'Musculosa de Jaylen Brown, jugador de los Boston Celtics, UNISEX, talle a partir del S hasta XXXL.', image:'https://images.footballfanatics.com/boston-celtics/youth-fanatics-branded-jaylen-brown-kelly-green-boston-celtics-2022-nba-finals-fast-break-replica-player-jersey-icon-edition_pi4924000_ff_4924444-a25b09cf0a919a74cab4_full.jpg?_hv=2&w=340'},
  { id: '5', nombre: 'Camiseta Boston Celtics Custom', precio: 32, categoria: 'camisetas', description: 'Camiseta Boston Celtics verde con logo de la franquicia, UNISEX, talle a partir del S hasta XXXL.', image:'https://images.footballfanatics.com/boston-celtics/mens-fanatics-branded-kelly-green-boston-celtics-primary-logo-team-t-shirt_pi5232000_ff_5232796-1eb348c2b04dbf4f76f3_full.jpg?_hv=2&w=340'},
  { id: '6', nombre: 'Camiseta Boston Celtics', precio: 32, categoria: 'camisetas', description: 'Camiseta Boston Celtics blanca con logo de la franquicia, UNISEX, talle a partir del S hasta XXXL.', image:'https://images.footballfanatics.com/boston-celtics/mens-fanatics-branded-white-boston-celtics-primary-logo-t-shirt_pi2591000_ff_2591431b_full.jpg?_hv=2&w=340'},
  { id: '7', nombre: 'Camiseta Boston Celtics', precio: 42, categoria: 'camisetas', description: 'Camiseta Boston Celtics Nike, HOMBRE, talle a partir del S hasta XXXL.', image:'https://images.footballfanatics.com/boston-celtics/mens-nike-green-boston-celtics-2022/23-city-edition-courtside-max90-backer-t-shirt_pi4753000_ff_4753404-625b3a622a17c5b731da_full.jpg?_hv=2&w=340'},
  { id: '8', nombre: 'Camiseta Boston Celtics', precio: 42, categoria: 'camisetas', description: 'Camiseta Boston Celtics Nike, MUJER, talle a partir del S hasta XXXL.', image:'https://images.footballfanatics.com/boston-celtics/womens-new-era-green-boston-celtics-2022/23-city-edition-v-neck-t-shirt_pi4788000_ff_4788982-30c4c5b12f90d7c88bb0_full.jpg?_hv=2&w=340'},
  { id: '9', nombre: 'Buzo Boston Celtics Gris', precio:70, categoria:'buzos', description: 'Buzo Gris Deportivo Entrenamiento, HOMBRE, talle a partir del S hasta XXXL.', image: 'https://images.footballfanatics.com/boston-celtics/mens-columbia-heathered-gray/green-boston-celtics-omni-wick-shotgun-20-quarter-zip-pullover-top_pi4751000_ff_4751696-7296e78e37bdc6a2858c_full.jpg?_hv=2&w=340'},
  { id: '10', nombre: 'Buzo Boston Celtics', precio:85, categoria:'buzos', description:'Buzo Verde Jordan, UNISEX, talle a partir del S hasta XXXL.', image:'https://images.footballfanatics.com/boston-celtics/mens-jordan-brand-kelly-green-boston-celtics-courtside-statement-edition-pullover-hoodie_pi4753000_ff_4753849-c261cdab6810b2d314e6_full.jpg?_hv=2&w=340'},
  { id: '11', nombre: 'Gorra Boston Celtics', precio:45, categoria:'gorras', description:'Gorra Boston Celtics Verde', image:'https://images.footballfanatics.com/boston-celtics/mens-new-era-kelly-green-boston-celtics-17x-nba-champions-metallic-undervisor-59fifty-fitted-hat_ss5_p-4581299+u-nakbfnu3h3a3frzusjgv+v-tewpgv19vbzduqhxfspu.jpg?_hv=2&w=340'},
  { id: '12', nombre: 'Gorra Boston Celtics', precio:35, categoria:'gorras', description:'Gorra Boston Celtics Blanca', image:'https://images.footballfanatics.com/boston-celtics/mens-mitchell-and-ness-white/green-boston-celtics-side-core-20-snapback-hat_ss5_p-200002820+u-8pv09rbvnlpjqd9kmhuf+v-dhcvugyfwqu089cybrgh.jpg?_hv=2&w=340'},

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
          <Carrousel />         
          <ItemList infoCard={infoCard} />
            
      </div>
    )
  }
export default itemListContainer