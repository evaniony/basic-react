import { createContext, useState } from "react";
//import { useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) =>{
    const [cartList, setCartList] = useState([]);

    const addProd = (item, quantity) =>{
        let toCart = cartList.find(prod => prod.idItem === item.id)
        if (toCart === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.img,
                    titleItem: item.title,
                    priceItem: item.price,
                    qtyItem: quantity
                }
            ])
        } else {
            toCart.qtyItem += quantity;
            setCartList([
                ...cartList]);
        }
    }


    const deleteAll = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let oneItem = cartList.filter(item => item.idItem !== id);
        setCartList(oneItem);
    }

    const totalItem = (id) => {
        let init = cartList.map(item => item.idItem).indexOf(id);
        return cartList[init].priceItem * cartList[init].qtyItem;
    }

    const quantityItem = () =>{
        let quantity = cartList.map(item => item.qtyItem);
        return quantity.reduce(((acc, elm) => acc + elm), 0);
    }

    const total = () => {
        let total = cartList.map(item => totalItem(item.idItem));
        return total.reduce(((acc, num) => acc + num), 0);
    }
    return(
        <CartContext.Provider value={{cartList,
                                      addProd,
                                      deleteAll,
                                      deleteItem,
                                      totalItem,
                                      total,
                                      quantityItem}}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartProvider;