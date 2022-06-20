import './Body.css';
import ItemListContainer from './ItemListContainer';

//import Card from './Card';
//COMPONENTE DE ESTADO
// function Body({children}) {
//   return (
//     <section   className="cuerpo">
//       {children}
//         <Card product ='Papas Sabritas' price="$20" img='https://fastidious-shortbread-d03ebf.netlify.app/images/P04.jpg'/>
//         <Card product ='Silla' price="$100" img=''/>
//         <Card product ='Vaso' price="$10" img=''/>
//         <Card product ='Plato' price="$14" img=''/>
//     </section>
//   );
// }


//COMPONENTE DE ESTADO
function Body({children}) {
  return (
    <section   className="cuerpo">
    <ItemListContainer />
    </section>
  );
}


export default Body;
