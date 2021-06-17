import React from 'react'
import '../../styles/AmazonBlock.css'
const AmazonBlock = () => {

    const   block_width = "21em";
    const   block_height = "25em";
    
    return (
        <div className="amazon-block" style={{ width: block_width , height: block_height }}>
          
          
          <div className="block-header">

              <div class="block-icon">
                        
                  
              </div>

              <div classNAme="block-title">
                    <span>Hi, Elizeu</span>
              </div>

          </div>


          <div class="block-sub-title">
              recommendations for you
          </div>






        </div>
    )
}

export default AmazonBlock
