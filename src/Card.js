
import { Data } from "./Variables";

import { MediaCard } from "./CardHtml";

import React, { createContext, useContext } from "react";  // Using context Here

const Store = createContext();                    // Using context Here
export const useStore = ()=> useContext(Store)     // Using context Here

export default function Cards() {
  return (

    <div className="box">
     
      {Data.map((element, key) => (
        //Using context Here 
         <Store.Provider value={element}>   
        <MediaCard
          Name
          poster
          tittle
          amount
          key={key}
        />
         </Store.Provider>
      ))}
     
    </div>
    
  );
}

