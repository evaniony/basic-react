import CardWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Header = () =>{
    return(
      <header className='header'>
      <h2><Link to="/">BASIC</Link></h2>
      <nav>
        <ul className="item-list">
          <li><Link to="/category/1">remeras & blusas</Link></li>
          <li><Link to="category/2">pantalones & faldas</Link></li>
          <li><Link to="category/3">vestidos</Link></li>
        </ul>
      </nav>
      <Link to='/cart' style={{textDecoration: "none", color: "white"}}><CardWidget /></Link>
      </header>
    )
}

export default Header;