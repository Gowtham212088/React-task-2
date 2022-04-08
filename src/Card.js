import { Data } from "./Variables";

import { MediaCard } from "./CardHtml";


export default function Cards() {
  return (

    <div className="box">
    
      {Data.map((element, id) => (
        
           
        <MediaCard
         id={id}
         {...element}
  />
         
      ))}
   
    </div>
    
  );
}