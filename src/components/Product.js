import { Link } from "react-router-dom";

const Product = ( {id, img, title, price, deleteProd }) =>{
    return(
        <div className="product">
            <img src={img} alt="product"/>
            <div className="product-item">
            <h2>{title}</h2>
            <p>$ {price} .-</p>
            <p className="details"><Link to={`/item/${id}`}>more</Link></p>
            </div>
        </div>
    )
}

export default Product;