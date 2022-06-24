import './ItemCount.css'
import { useState } from "react";

function Contador({cantidad}){
    //let msj = ""
    cantidad = parseInt(cantidad)
    
    
    const[num,setNum] = useState(1);
    
    const sumar =() =>{
      if (num < cantidad){
            setNum(num + 1)
      }
      
    }

    const restar =() =>{
        if (num> 1){
            setNum(num - 1)
        }else{
        }
    }

    const reset =() =>{
      
            setNum(1)
       
    }

    return(
        <>
        <p>
        <button onClick = {restar}>-</button>
        &nbsp;&nbsp;{num}&nbsp;&nbsp;
        <button onClick = {sumar}>+</button>
        <button onClick = {reset}>limpiar</button>        
        </p>
        <p className="stock">Stock : {cantidad}</p>
        {/* <p>{msj}</p> */}
        </>
    )
}

export default Contador;
