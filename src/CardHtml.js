
import { useStore } from "./Card";  // Using context Here
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import Badge from "@mui/material/Badge";
import { useState } from "react";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { Datacontext } from "./App";


    export function MediaCard({Name, poster,tittle,price, id}) {
      
    const [remove, setRemove] = useState(true);
   const badgeSty={display:remove? "none":"block"}
  
   const contextData= useContext(Datacontext)
   // Using context Here
  
  
   console.log(contextData)
  return (
      <div className="card">
        <div className="image">
          <img src={poster}  alt={Name}/>
        </div>
        <div>
          <p className="name-summary">
            {" "}
            <b> {Name} </b> <p className="amount"> {price} </p>
          </p>
          {/* <p className="name-summary"> {tittle} </p> */}
        </div>
  
  {/*  Button div section */}
  
        <div>
          <Button variant="contained"       // Button 
          id="btn"
          color="secondary"
          onClick={()=>{
            setRemove(!remove)              // Button Event
            contextData.cartData.push({name:Name,price:price,poster:poster,title:tittle, id:id})

          }}
          >
        {remove? "Add To Cart " :"Remove On Cart"}   {/*Inner Html if Add to cart Button */}
        
  
         {/*Add Cart & De-Cart ICON */}
      { remove? <AddShoppingCartIcon/> : <RemoveShoppingCartIcon/> } 
           </Button>
  
  
  
           <Button variant="contained" sx={{ margin: 2 }} style={{color:"#ffc400"}}  href="#contained-buttons"> {/* Buy Now Button */}
           Shop now <LocalMallRoundedIcon />
          </Button>
        </div>
      </div>
    );
  }