import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart';
import { CartContext } from './components/CartContext';
import CartProvider from './components/CartContext';

function App() {
  return (
    //los componentes son piezas/porciones de codigo. 
    //diseño modular --- crear la app, y dividir por partes.
    //existe la reutilizacion de codigo. 
    //componente --- pieza reutilizable. 


    //Es importante el dividir las tareas, para crear parte por parte.
    //luego de crear esas piezas, vamos a ir ensamblando
    //y crear un nuevo componente.

    //entrypoint --- index.js
    //el archivo es donde se esta renderizando la libreria.

    //componente app --- componente principal, el elemento raiz
    //funcion --- componente
    //si la funcion, devuelve jsx, es un componente
    //
    <>
    <CartProvider>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/category/:idCategory' element={<ItemListContainer />} />
      <Route path='/item/:idItem' element={<ItemDetailContainer />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App;
