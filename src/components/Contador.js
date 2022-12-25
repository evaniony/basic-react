import { Add, Remove } from "@mui/icons-material";
import { useEffect, useState } from "react"
import React from "react";
import { AddItem, DisabledItem } from "../utils/StyleComponent";

const Contador = ({ stock = 0, first = 1, Alert}) =>{
const [rate, setRate] = useState(0);

useEffect(()=>{
  setRate(first);
}, [])

const max = () =>{
  if(rate < stock){
  setRate(rate + 1);
  }
}

const min = () =>{
  if(rate > first+1){
   setRate(rate - 1);
  }
}





    return(
      <>
        <div className="btn-contador">
            <button className="btn-min" onClick={min}><Remove /></button>
            <h3>{rate}</h3>
            <button className="btn-max" onClick={max}><Add /></button>
        </div>
        {
              stock && rate
              ? <AddItem onClick={() => Alert(rate)}>Add To Cart</AddItem>
              : <DisabledItem disabled>Add To Cart</DisabledItem>
        }
        </>
    )
}

export default Contador;