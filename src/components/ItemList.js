import { useState } from "react";
import { Loading } from "../utils/StyleComponent";
import Product from "./Product";


const ItemList = ({ items }) => {
    const [datos, setDatos] = useState([]);

        const deleteProd = (id) =>{
        let newArray = datos.filter(item =>(item.id !== id))
        setDatos(newArray);
        
    }
    return(
        <>
        <div className="div-container">
                {
                    items.length > 0
                    ? items.map(item => 
                    <Product
                    key = {item.id}
                    id = {item.id}
                    title = {item.title}
                    price = {item.price}
                    img = {item.img}
                    deleteProd = {() => deleteProd(item.id)} />)
                    : <Loading>Loading ...</Loading>
                }
        </div>
        </>
    )
}

export default ItemList; 