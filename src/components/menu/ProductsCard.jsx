import './styleCards.css'
import React, {useState} from "react"
import swal from 'sweetalert';
//AGREGAR CARTAS AL CONTENEDOR PADRE
export function ProductsCard({ product,productMenu, card, setCard}) {
    const { id, name, price, img } = product; //product es cada obj que contiene
    /* state button */
    const [buttonActive, setbuttonActive] = useState(false);

    const addInList = () =>{
        const existProduct = card.find((products) => products.id === product.id)
        if (existProduct) {
            setCard(//contiene todos los agregados
              card.map((products) =>
                products.id === product.id ? 
                { ...existProduct, 
                  quantity: existProduct.quantity + 1 
                } : products)
                );   
                 
          } else {
            setCard([...card, { ...product, quantity: 1 }]);  
            swal({
              title: "Agregado",
              button:"Aceptar",
              timer:"2000"
            });    
            setbuttonActive(true)
                
          }
        
          
      }
    return (
    <section className="container-cards">
        <div className="slider">
            {productMenu ? ((
            <div className="card card-product" style={{ width: '10rem'}} >
                <img src={img} alt="imagen" className="card-img-top"/>
                <div className="card-body">
                    {productMenu ? ((<section>s/ {price}</section>)): (<></>)}{/* Si el product menu ya esta, se agregara section pero sino se suma y solo se agrega un fragment */}
                    <h5 className="card-title designName">{name}</h5>
                    {productMenu ? ((
                      <button className='btn btn-primary btn-block' disabled={buttonActive} onClick={() => addInList(id)}>Agregar</button>
                    ))
                    : (<></>)}
                </div>
            </div>))
            : (<></>)}
            
      </div>
    </section>       
    )
}