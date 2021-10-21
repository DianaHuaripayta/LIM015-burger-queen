/* eslint-disable array-callback-return */
import { FaPlus, FaMinus, FaRegTrashAlt} from "react-icons/fa";
export function AddCardForm({ card, setCard }) {//cart y setCard con que contiene los cards que le dieron click
   
    const sumPrices = card.reduce((acc, item) => acc + item.quantity * item.price , 0)//item el elemento actual | 0 porque comienza a multiplicar de 0

    return (    
            <div className="table-responsive">
                <table className="table table-borderless">
                    <thead className="table-active"> 
                        <tr >{/* className="table-primary" */}
                            <th scope="col">DESCRIPTION</th>
                            <th scope="col">TOTAL PARCIAL</th>
                            <th scope="col">CANT.</th>

                        </tr>
                    </thead>
                    <tbody>
                            {card.length === 0 ? (   
                                <tr >
                                    <td>Agregar</td><td>Agregar</td><td>Agregar</td>
                                </tr >         
                                ):(card.map((product) => (
                                    <tr>
                                        <td>{product.name} </td>
                                        <td>s/ {product.price}</td>
                                        <td><FaMinus color="#78c2ad" />{product.quantity}<FaPlus color="#78c2ad"/> <FaRegTrashAlt/>
                                        </td>
                                    </tr>
                                ))
                            
                            )}  
                        </tbody>
                       <tfoot className="table-active">
                            <tr>
                                <td colSpan="2"><strong>Total</strong></td>{/*colSpan 'S' Uppercase */}
                                <td className="text-right"><strong>{sumPrices}.00</strong><FaRegTrashAlt/></td>
                            </tr>
                        </tfoot>
                </table>
            </div> 
      
       
    )
};
