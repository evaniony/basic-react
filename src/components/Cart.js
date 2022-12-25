import { Link } from "react-router-dom";
import { useContext } from "react";
import { ItemCart, Ajusteh1, ContainerItem, ImageMin, ContainerInfo, AddItem, ContainerButton, BoxFlex, Center, Resumen, CartContainer } from "../utils/StyleComponent";
import { CartContext } from "./CartContext";

const Cart = () =>{
    const { cartList } = useContext(CartContext);
    const test = useContext(CartContext)

    return(
        <>
        <div>
        <Ajusteh1>Cart</Ajusteh1>
        <BoxFlex>
            {
                cartList.length > 0 &&
            <AddItem onClick={() => test.deleteAll()} style={{position: "absolute"}}>Delete All</AddItem>
            }
        </BoxFlex>
        </div>

        <hr />

        <CartContainer>
            {
            cartList.length === 0
            ? <div>
                <ItemCart>
                <p>oh no</p>
                <h2>The cart is empty</h2>
                </ItemCart>
                <Center>
                <Link to='/'><AddItem>get to shopping!</AddItem></Link>
                </Center>
                </div>
            : cartList.map(item => (
            <ContainerItem>
                <ImageMin src={item.imgItem}/>
                <ContainerInfo>
                <p style={{fontSize: 24}}>{item.titleItem}</p>
                <p>${item.priceItem}</p>
                <p>Cantidad: {item.qtyItem}</p>
            </ContainerInfo>
            <ContainerButton>
                    <p>{item.qtyItem} --- {item.priceItem}</p>
                    <p>Total: ${test.totalItem(item.idItem)}</p>
                    <AddItem onClick={ () => test.deleteItem(item.idItem) }>Delete</AddItem>
                </ContainerButton>
            </ContainerItem>
            ))
            }
            {
            cartList.length > 0 &&
            <Resumen> 
            <p>Sub Total: ${test.total()}.-</p>
            <hr/>
            <h2>TOTAL: ${test.total()}.-</h2>
            <button className="finishCart">FINALIZAR</button>
            </Resumen>
        }
        </CartContainer>
        </>
        )
}

export default Cart;