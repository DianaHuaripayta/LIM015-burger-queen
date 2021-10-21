import './styleCards.css'
import React from "react"
/* import {SumProducts} from "./SumProducts.jsx"; */
//AGREGAR CARTAS AL CONTENEDOR PADRE
export function ProductsCard({ product,productMenu, card, setCard}) {
    const { id, name, price, img } = product; //product es cada obj que contiene
    
    const addInList = () =>{
        const existProduct = card.find((products) => products.id === product.id)
        if (existProduct) {
            console.log(existProduct, '¿EXISTE?(1)')
            setCard(//contiene todos los agregados
              card.map((products) =>
                products.id === product.id ? { ...existProduct, 
                  quantity: existProduct.quantity + 1 /* si ya existe quantity agrega 1 */
                } : products)
            );
            console.log(card,'card SET CARD (2)')
            
          } else {
            setCard([...card, { ...product, quantity: 1 }]);
            console.log(product,'product con el obj (3)')
            console.log(card,'no hay nada (4)')
           
          }
    }
    
    return (
    <section className="container-cards">
        <div className="slider">
            {productMenu ? ((
            <div className="card card-product" style={{ width: '10rem'}} >
                <img src={img} alt="imagen" className="card-img-top"/>
                <div className="card-body">
                    {productMenu ? ((<section>${price}</section>)): (<></>)}{/* Si el product menu ya esta, se agregara section pero sino se suma y solo se agrega un fragment */}
                    <h5 className="card-title designName">{name}</h5>
                    {productMenu ? ((
                      <button className='btn btn-primary btn-block' onClick={()=>addInList(id)}>Agregar</button>
                     /*  <div> <button onClick={SumProducts}> Say Hello</button></div> */
                   
                    ))
                    : (<></>)}
                </div>
            </div>))
            : (<></>)}
            
      </div>
    </section>       
    )
}