import React from "react";
import { Data } from "./Variables";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";
import { useState } from "react";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Button from "@mui/material/Button";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#b28900",
    },
  },
});

export default function Cards() {
  return (
    <div className="box">
      {Data.map((element, index) => (
        <MediaCard
          Name={element.Name}
          poster={element.poster}
          details={element.tittle}
          amount={element.price}
          key={index}
        />
      ))}
    </div>
  );
}

function MediaCard(props) {
  const [remove, setRemove] = useState(true);
const badgeSty={display:remove? "none":"block"}


// const [cart, setCart]=useState("Add TO Cart")

return (
    <div className="card">
      <div className="image">
        <img src={props.poster} />
      </div>
      <div>
        <p className="name-summary">
          {" "}
          <b> {props.Name} </b> <p className="amount"> {props.amount} </p>
        </p>
        <p className="name-summary"> {props.details} </p>
      </div>

// Button div section

      <div>
        <Button variant="contained"       // Button 
        id="btn"
        color="secondary"
        onClick={()=>{
          setRemove(!remove)              // Butt
        }}
        >
           Add To Cart

          <Badge
            badgeContent={"⛔"}
            color="primary"
            style={badgeSty}
          >
            <AddShoppingCartIcon color="primary" />
          </Badge>
        
        </Button>

        <IconButton>
          <LocalMallRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
}
