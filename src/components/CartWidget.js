import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CardWidget = () =>{
  const test = useContext(CartContext)
  //descargar framework
  //particularmente el de diseno e iconos de material ui.
  //importarlos y usar.
  //el 4, esta hardcodeado por el momoento.
    return(
      <Badge badgeContent={test.quantityItem()} color="secondary">
      <ShoppingCart />
      </Badge>
    )
}

export default CardWidget;