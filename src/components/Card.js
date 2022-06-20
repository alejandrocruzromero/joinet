import './Card.css';
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
        <h4>{props.product}</h4>
        <p>{props.price}</p>
        
    </section>
  );
}
export default Card;
