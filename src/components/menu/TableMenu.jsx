import { FaPlus, FaMinus, FaRegTrashAlt} from "react-icons/fa";
import { SuccessfulAlert } from "./SuccessfulAlert";
import { ModalSummary } from "./summary/ModalSummary";
export function TableMenu({card, setCard}) {
    const total = card.reduce((acc, item) => acc + item.quantity * item.price , 0)//item el elemento actual | 0 
    /* ------------------------------------------- */
    const fnResta = (id) => {
        // eslint-disable-next-line array-callback-return
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
        // eslint-disable-next-line array-callback-return
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
    const deleteAllProducts = (e) =>{
        e.preventDefault();
        setCard([])
    }

    return (
        <div>
            <div className="table-responsive">
                <table className="table table-borderless">
                    <thead className="table-active">
                        <tr>
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
                            <tr key={product.id}>
                                <td> {product.name} </td>
                                <td >s/ {product.price}</td>
                                <td >
                                    <FaMinus style={{ color: "#78c2ad", fontSize: '15px', margin: '6px' }} onClick={() => fnResta(product.id)} /> {product.quantity}

                                    <FaPlus style={{ color: "#78c2ad", fontSize: '15px', margin: '6px' }} onClick={() => fnSuma(product.id)} />

                                    <FaRegTrashAlt style={{ color: "#78c2ad", fontSize: '15px', margin: '6px', cursor: 'pointer' }} onClick={() => setCard(card.filter(item => item.id !== product.id))} />
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
                                <strong>{total}.00</strong> <FaRegTrashAlt onClick={deleteAllProducts} />
                            </td>

                        </tr>

                    </tfoot>
                </table>
                <ModalSummary/>
            </div>
        </div>
    )
}
