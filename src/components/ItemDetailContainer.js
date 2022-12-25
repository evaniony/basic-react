import { useEffect, useState } from "react";
import { Promesa } from "../utils/Promesa";
import { Data } from "../utils/Data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{

    const [dato, setDato] = useState({});
    const { idItem } = useParams();


    useEffect(()=>{
        Promesa(2000, Data.find(item => item.id == idItem))
        .then(response => setDato(response))
        .catch(err => console.log(err))

    }, [])

    return(
        <>
        <ItemDetail item={ dato } />
        </>
    )
}

export default ItemDetailContainer;