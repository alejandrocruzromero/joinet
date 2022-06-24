import './Card.css';
import ItemCount from './ItemCount'
import ItemList from './ItemList';
// ESTE ES UN COMPONENTE STATELESS, solo son de presentacion
// function Card({product,price,img}) {
//   return (
//     <section   className="Card">
//         <h4>{product}</h4>
//         <p>{price}</p>
//         <img src={img}  width="50"/>
//     </section>
//   );
// }

//ó

function Card(props) {
  
  return (
    <section   className="card">
      <img src={props.img}  className = "CardContenido" alt ="contenido"/>
        <h4 className = "CardTitulo">{props.nombre}</h4>
        <p className = "CardP">${props.precio}</p>
        <ItemList />
        <ItemCount cantidad = {props.stock}/>
        
    </section>
  );
}
export default Card;
