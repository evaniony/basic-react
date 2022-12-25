import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
  margin: 10px;
  margin-top: 20px;
  border-radius: 5px;
  background-color: #C5C2C6;
  display: flex;
  gap: 50px;
  align-items: flex-start;
  
`;

const ImageSize = styled.img`
  width: 60vh;
  height: 60vh;
  object-fit: cover;
`;

const WrapperItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  font-family: 'Poppins', sans-serif;

`;
const Title = styled.h2`
  color: #000;
  font-size: 30px;
  font-weight": 300;
`;

const Price = styled.p`
  padding: 8px;

`
const AddItem = styled.button`
  background-color:#403f3f;
  color: #fff;
  height: 50px;
  width: 100px;
  margin: 15px;
  cursor: pointer;
`
const Stock = styled.p`
  color: #807F80;
`

const ItemCart = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background-color: #CBC9CB;
 font-size: 24px;
 height: 100px;
 width: 1500px;
 margin: 10px;
 border: 1px solid #000;
 `

 const Ajusteh1 = styled.h1`
 margin: 10px;
 font-weight: 100;
 display: inline-block;
 `

 const ContainerItem = styled.div`
 background-color: #ECEAEC;
 margin: 10px;
 border: 1px solid #000;
 width: 50%;
 display: flex;

 `
 const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px;
    width: 500px;
 `
 const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px
 `

 const ImageMin = styled.img`
  width: 10vh;
  height: 10vh;
  object-fit: cover;
  margin: 10px;
`;

const BoxFlex = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  position: relative;
`
/* const BoxShopping = styled.div`

` */

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const DisabledItem = styled.button`
  background-color:#716F6F;
  color: #BFBABA;
  height: 30px;
  width: 100px;
  margin: 15px 5px;
`

const Loading = styled.p`
  font-family: 'Poppins', sans-serif;
  margin: 10px;
`
const Desc = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
`

const Resumen = styled.aside`
  font-family: 'Poppins', sans-serif;
  border: 1px solid #000;
  width: 700px;
  heigth: 700px;
  display: flex;
`
const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export{
    Wrapper, ImageSize, WrapperItem, Title, Price, AddItem, Stock, ItemCart, Ajusteh1, ContainerItem, ImageMin, ContainerInfo, ContainerButton,
    BoxFlex, Center, DisabledItem, Loading, Desc, Resumen, CartContainer
}