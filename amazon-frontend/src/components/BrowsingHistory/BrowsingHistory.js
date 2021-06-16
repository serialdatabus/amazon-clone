import React, { useEffect, /*useState*/ } from "react";
import { HistoryItem } from "./HistoryItem";
import "../../styles/BrowsingHistory.css";

export default function BrowsingHistory() {

  //const [state, setstate] = useState();

  useEffect(() => {
    
    return () => {
      
    }
  }, [])
  
  return(

      <div className="browsing-history">
       

       <HistoryItem />
       <HistoryItem />
       <HistoryItem />
       <HistoryItem />
     

     </div>

  );


}
