import "./App.css";
import MediaCard from "./Card";
import { AddCart } from "./Cart";
import { createContext } from "react";

export const Datacontext = createContext()

function App() {



const initialContextData = {
  cartData:[]
}

  return (
    <div className="App">
      <Datacontext.Provider value={initialContextData}>
      
      <MediaCard />

      </Datacontext.Provider>
    </div>
  );
}

export default App;
