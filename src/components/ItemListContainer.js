import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import Card from './Card';

// import img01 from '../assets/images/01.webp'
// import img02 from '../assets/images/02.jpg'
// import img03 from '../assets/images/03.jpg'
// import img04 from '../assets/images/04.jpg'

//

//


function ItemListContainer(){


      //CARGAR ARCHIVO CON INFORMACION PARA LLENAR CARDS
  const [info, setInfo] = useState([])
  useEffect(()=>{
    setTimeout(()=>
    {
      fetch('data.json')  //Trae e l response completo
      .then((resp) => resp.json())//Extrae la informacion de dentro del response
      .then((data) => setInfo(data)) // seteart esa informacion en nuesto state
    },3000
    )
  },[])
  //CARGAR ARCHIVO CON INFORMACION PARA LLENAR CARDS



    return(
        <>
    <section   className="cuerpo">
        {/* <Card product = 'Audifonos con microfono' stock = '10' price ='$39' img ={img01} />
        <Card product = 'Vaso para Malteada' stock = '7' price ='$107' img ={img02} />
        <Card product = 'Base con ventilador para laptop' stock = '15' price ='$146' img ={img03} />
        <Card product = 'Bateria pila Nokia' stock = '12' price ='$21' img ={img04} /> */}
        {info.map(i => <Card nombre={i.nombre} stock={i.stock} precio={i.precio} img ={i.img} />)}
    </section>
    </>
    );

}

// function ItemListContainer({children}) {
//     return(
//         <section   className="card">
//             <Card product ='Audifonos con microfono' price="$39" img='../assets/images/01.webp'>
//             <Card product ='Vaso para Malteada' price="$107" img='../assets/images/02.jpg'/>
//             <Card product ='Base con ventilador para laptop' price="$146" img='../assets/images/03.jpg'/>
//             <Card product ='Bateria pila Nokia' price="$21" img='../assets/images/04.jpg'/>
//     </section>
//     );

// }

export default ItemListContainer;