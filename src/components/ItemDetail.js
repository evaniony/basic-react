import { useContext, useState } from "react";
import Toastify from 'toastify-js'
import { Wrapper, ImageSize, WrapperItem, Title, Price, Stock, AddItem, Loading } from "../utils/StyleComponent";
import { CartContext } from "./CartContext";
import Contador from "./Contador";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState(0)

    const { addProd } = useContext(CartContext);
    
    const Alert = (cant) =>{
        Toastify({
            text: "You have selected " + cant + " items.",
            duration: 3000,
            position: "left",
            style:{
                background: "white",
                color: "black"
            }
            }).showToast();
        setItemCount(cant);
        addProd(item, cant);

    }

    return(
        <>
        {
        item && item.img
       ?
        <Wrapper>
            <ImageSize src={item.img} />
        <WrapperItem>
            <Title>{item.title}</Title>
            <p>{item.description}</p>
            <Stock>Se encuentran disponibles {item.stock} articulos.</Stock>
            <Price style={{fontSize: 30}}>${item.price}</Price>
            {
                itemCount === 0
                ? <div>
                    <Contador stock={item.stock} first={itemCount} Alert={Alert}/>
                 </div>
                : <Link to='/cart'><AddItem>Go to the cart!</AddItem></Link>
            }
        </WrapperItem>
        </Wrapper>
        : <Loading>Loading ...</Loading>
        }
        </>
    )
}

export default ItemDetail;
