import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { Promesa } from "../utils/Promesa";
import ItemList from "./ItemList"
//import { Data } from "../utils/Data";
import { collection, getDocs } from "firebase/firestore";
import  { db }  from "../utils/firebaseConfig";

const ItemListContainer = () =>{

    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();


    useEffect( () => {
        const progress = async() =>{
    const querySnapshot = await getDocs(collection(db, "products"));
    const dataFirestore = querySnapshot.docs.map( item => ({
        id: item.id,
        ...item.data()
    }))
    setDatos(dataFirestore)}
    progress()
    }, [idCategory])

    /* useEffect(()=> {
        return (()=>{
            setDatos([])
        })
    }, []) */

    return(
        <>
        <ItemList items= { datos } />
        </>
    )
}

export default ItemListContainer;