import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail'
import './itemDetailContainer.css'


const ItemDetailContainer = () => {

 // data tiene como valor incial "null" para que no renderice hasta que sea distinto de ''
      const [data, setData] = useState( null );
    
      const { detalleId } = useParams();
    
    
      useEffect( () => {
        const queryDb = getFirestore()
        const queryDoc = doc(queryDb,'productos', detalleId)
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()}))
    
     },[detalleId]);  
      
  return (
    //creo un if ternario para que solo me renderice el objeto cuando data no sea nulo.
    <div> {data ? <ItemDetail data={data}/> : ''}  </div>
  )
}

export default ItemDetailContainer