/* eslint-disable array-callback-return */
import { FaPlus, FaMinus, FaRegTrashAlt} from "react-icons/fa";
import './table.css'
export function AddCardForm({ card, setCard, buttonActive, setbuttonActive}) {//cart y setCard con que contiene los cards que le dieron click
    const total = card.reduce((acc, item) => acc + item.quantity * item.price , 0)//item el elemento actual | 0 
    
    const fnResta = (id) => {
        card.map((product) => {
            if (product.id === id && product.quantity > 1) {
                
                setCard(
                    card.map((products) =>
                      products.id === product.id ? 
                      { ...products, 
                        quantity: products.quantity - 1 
                      } : products)
                );         
            }
           
        })
    }
    const fnSuma = (id) => {
        card.map((product) => {
            if (product.id === id) {
                setCard(
                card.map((products) =>
                    products.id === product.id ? 
                    { ...products, 
                    quantity: products.quantity + 1 
                    } : products)
                );         
            }  
        })
    }
    
    const deleteProduct = (id) => {
        setCard(card.filter(item => item.id !== id))
        
        setbuttonActive(true)
    }
    return (    
            <><div className="table-responsive">
            <table className="table table-borderless">
                <thead className="table-active">
                    <tr>{/* className="table-primary" */}
                        <th scope="col">DESCRIPTION</th>
                        <th scope="col">TOTAL PARCIAL</th>
                        <th scope="col">CANT.</th>

                    </tr>
                </thead>
                <tbody>
                    {card.length === 0 ? (<tr>
                        <td>Agregar</td><td>Agregar</td><td>Agregar</td>
                    </tr>
                    ) : (card.map((product) => (
                        <tr>
                            <td>{product.name} </td>
                            <td>s/ {product.price}</td>
                            <td>
                                <FaMinus style={{ color: "#78c2ad", fontSize: '15px', margin: '6px' }} onClick={() => fnResta(product.id)} /> {product.quantity}

                                <FaPlus style={{ color: "#78c2ad", fontSize: '15px', margin: '6px' }} onClick={() => fnSuma(product.id)} />

                                <FaRegTrashAlt style={{ color: "#78c2ad", fontSize: '15px', margin: '6px', cursor: 'pointer' }}  disabled={buttonActive} onClick={() => deleteProduct(product.id)} />
                            </td>
                        </tr>


                    ))

                    )}
                </tbody>
                <tfoot className="table-active">
                    <tr>
                        <td colSpan="2">
                            <strong>Total</strong>
                        </td>
                        <td>
                            <strong>{total}.00</strong>
                        </td>

                    </tr>

                </tfoot>
            </table>
        </div>
        </>                
    )
};
/* () => setCard(card.filter(item => item.id !== product.id)) */