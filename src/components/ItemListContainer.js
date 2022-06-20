import './ItemListContainer.css';
import Card from './Card';
import img01 from '../assets/images/01.webp'
import img02 from '../assets/images/02.jpg'
import img03 from '../assets/images/03.jpg'
import img04 from '../assets/images/04.jpg'

function ItemListContainer(){
    return(
    <section   className="cuerpo">
        <Card product = 'Audifonos con microfono' price ='$39' img ={img01} />
        <Card product = 'Vaso para Malteada' price ='$107' img ={img02} />
        <Card product = 'Base con ventilador para laptop' price ='146' img ={img03} />
        <Card product = 'Bateria pila Nokia' price ='$21' img ={img04} />
    </section>

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