import React, { useRef , useState} from 'react';
import {Link} from "react-router-dom";
import { FaPlus, FaMinus, FaRegTrashAlt, FaUser} from "react-icons/fa";
import { collection, addDoc } from "firebase/firestore";
import { ModalSummary } from './summary/ModalSummary';
import {db} from "../firebase/firebase-config"
export function AddCardForm({ card, setCard }) {//cart y setCard con que contiene los cards que le dieron click
    const total = card.reduce((acc, item) => acc + item.quantity * item.price , 0)//item el elemento actual | 0 
    const inputName = useRef();
    
    const addOrdersFirebase =async(e)=>{
        e.preventDefault()
        let order = {};
        order.nameCustomer= inputName.current.value;
        order.products = card;
        order.created_at = new Date();
        order.status = "pending";
        console.log(order); 
        
       
        const docRef = await addDoc(collection(db, "orders"), {
        nameCustomer: inputName.current.value,
        products: card,
        created : new Date(),
        status : "pending"
        });
    
        console.log("Document written with ID: ", docRef.id);
    
    }
    /* ---- */

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
            <>
            <div className="form-group">
                <div className="form-group">
                    <div className="input-group mb-3">
                        <span className="input-group-text"><FaUser/></span>
                        <input type="text" className="form-control" ref={inputName}/>
                    </div>  
                </div>
            </div>
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
               
                {/* <button type="button" className="btn btn-primary btn-lg" onClick={sendOrderProducts}>Enviar compras</button> */}
                {/* <ProductSummary onClick={addOrdersFirebase}></ProductSummary> */}

                {/* Button trigger modal */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={addOrdersFirebase}>
                Enviar Pedido 
                </button>
                <ModalSummary/>
               
            </div></>
                       
    )
};
