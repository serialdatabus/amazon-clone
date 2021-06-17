import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { fonticon } from "../../helpers/helpers"; 

export const HistoryItem = ({ fullhistory , onDelete , hideDate }) => {

  
  const [showDate, setShowDate] = useState(true);

  return (
    <div className="history-item">
      <div className="history-product-image">
          
          {!fullhistory && <img  alt="product" src="https://images-na.ssl-images-amazon.com/images/I/71URNvzoWqL._AC_SL1500_.jpg" />}

          {fullhistory && 
          
          <div className="fullhistory">
                View full<br/> history
          </div>
          }

      </div>

      <div className="history-product-title">{!fullhistory && "Oculus Rift S PC-Powered VR Gaming Headset"}</div>

      <div className="history-bottom-bar">

                  <div className="history-orange-circle"></div>

                  {!fullhistory &&<div onMouseEnter={()=>setShowDate(false)} onMouseLeave={()=>setShowDate(true)} className="history-delete-button">
                  {fonticon(faTimes,"delete-icon",()=>{
                    
                        
                    
                    onDelete();


                  })}
                  </div>
} 

                  {(showDate && !hideDate && !fullhistory) && <span className="date-history">
                    Yesterday
                  </span>}


                  {(!showDate && !fullhistory)  && <span className="date-history">
                    Remove
                  </span>}

      </div>

      
    </div>
  );
};
