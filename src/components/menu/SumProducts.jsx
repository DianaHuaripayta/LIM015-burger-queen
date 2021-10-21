import React, {Component}  from "react";
import ReactDOM from "react-dom";
class SumProducts extends Component{
    
    clickHandler(){
        console.log('clicked here')
    }
    render(){
        return (
        
            <button className='btn btn-primary btn-block' onClick={this.clickHandler}>Agregar</button>
            
        )
    }
}
export default SumProducts;
   

   

