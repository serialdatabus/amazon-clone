import React, { useEffect} from 'react'
import '../../styles/FloatingLanguageSelector.css'


export const FloatingLanguageSelector = ({ isvisible }) => {



   // const [isvisible, setisvisible] = useState(true);


   useEffect(() => {
     
    



       return () => {
        
       }
   }, [])



    return (
        <div style={{ left: 0  ,  top: "100%" }} id="floating-language-selector" className={(isvisible ? "visible":"")}>


            <div className="title-change-language">
                <span>Change language</span>
                <a href="/">Learn more</a>
            </div>

            <div className="language-option">
                <span className="radiobtn"></span>
                <a href="/" className="language-label">English - EN</a>
            </div>


            <div className="language-option">
                <span className="radiobtn"></span>
                <a href="/"  className="language-label">English - EN</a>
            </div>



            <div className="language-option">
                <span className="radiobtn"></span>
                <a href="/"  className="language-label">English - EN</a>
            </div>



            <div className="language-option">
                <span className="radiobtn"></span>
                <a href="/"  className="language-label">English - EN</a>
            </div>



            <div className="language-option">
                <span className="radiobtn"></span>
                <a  href="/"  className="language-label">English - EN</a>
            </div>


            <div className="language-option">
                <span className="radiobtn"></span>
                <a href="/"  className="language-label">English - EN</a>
            </div>

        </div>
    )
}


