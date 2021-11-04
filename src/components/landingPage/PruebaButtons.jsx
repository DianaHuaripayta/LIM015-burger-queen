/* eslint-disable jsx-a11y/no-redundant-roles */
import {Link} from "react-router-dom";
import './styleButtonLp.css'
export function PruebaButtons() {
    return (
           <div className ='containerButtons'>
               <div className='designbutton'>
               <Link to='/menu'> <button className="button-71" role="button">MESERO</button></Link> 
               </div>
               
                <div className='designbutton'>
                <Link to="/statusProducts"><button className="button-71" role="button">CHEF</button></Link> 
                </div>
           </div>
    
    )
}
