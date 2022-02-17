import { useStore } from "./Card";  // Using context Here
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import Badge from "@mui/material/Badge";
import { useState } from "react";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import Button from "@mui/material/Button";




    export function MediaCard() {
      
    const [remove, setRemove] = useState(true);
   const badgeSty={display:remove? "none":"block"}
  
  const data = useStore()   // Using context Here
  
  
  return (
      <div className="card">
        <div className="image">
          <img src={data.poster}  alt={data.Name}/>
        </div>
        <div>
          <p className="name-summary">
            {" "}
            <b> {data.Name} </b> <p className="amount"> {data.amount} </p>
          </p>
          <p className="name-summary"> {data.tittle} </p>
        </div>
  
  {/*  Button div section */}
  
        <div>
          <Button variant="contained"       // Button 
          id="btn"
          color="secondary"
          onClick={()=>{
            setRemove(!remove)              // Button Event
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
  