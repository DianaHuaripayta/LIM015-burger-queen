import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaUser} from "react-icons/fa";
import { db } from '../firebase/firebase-config';
import { collection, getDocs,addDoc } from "firebase/firestore";
import { ProductsCard } from './ProductsCard.jsx';
import { TableMenu } from './TableMenu';
import swal from 'sweetalert';
import './styleMenu.css'

export function Menu() {
  // Declara una nueva variable de estado, que llamaremos "menu".
  const [contentMenu, setDemoMenu] = useState([]); //useState es un Hook
  // Declara una nueva variable de estado, que llamaremos "products".
  const [typeProduct, setProductType] = useState('breakfast')
  
  const getProductsFirebase = async () => {
    const arrayProduct = [];
    
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      arrayProduct.push({
        id: doc.id,
        idType: doc.data().type,
        img :doc.data().img,
        price: doc.data().price,
        name: doc.data().name
      })
    });

    return arrayProduct;
  };

  useEffect(() => {
    async function fetchList() {
      const listMenu = await getProductsFirebase()
      setDemoMenu(listMenu.filter(doc => doc.idType === typeProduct));
    }
    fetchList();
  }, [typeProduct])
  
  const [card, setCard] = useState([])

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
      
      swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "Aww yiss!",
      });
      console.log("Document written with ID: ", docRef.id);
  }
  
    return (
      
        <section className="containerMenu">
          <div className="form-group">
                <div className="form-group">
                    <div className="input-group mb-3">
                        <span className="input-group-text"><FaUser/></span>
                        <input type="text" className="form-control" ref={inputName} placeholder='Nombre del cliente'/>
                    </div>  
                </div>
            </div>
            <div className="btn-group barrasOption" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                <label className="btn btn-outline-primary" htmlFor="btnradio1"  onClick={() => { setProductType('breakfast'); } }>Desayuno</label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio2" onClick={() => { setProductType('lunch'); } }>Almuerzo - Cena</label>
            </div>
            <section className="containerBox">
                  <section className="container-cards">
                    <div className="slider">
                    {contentMenu.map((product) => (//contentMenu tiene el contenido INICIAL de las
                        <ProductsCard  
                        key={product.id} 
                        product={product} 
                        card={card} 
                        setCard={setCard} 
                        productMenu={contentMenu}/>
                      ))
                      }
                    </div>
                  </section>  
            </section>    
            <section>
              <TableMenu card={card} setCard={setCard} />
            </section>  
            <section className="containerButtonMenu">
              <div className="boxButton">
                  <button type="button" className="btn btn-primary" onClick={addOrdersFirebase} >
                      Enviar Pedido 
                  </button>
              </div>
              <div className="boxButton">
                  <Link to="/">
                    <button type="button" className="btn btn-primary"> Volver</button>
                  </Link>
              </div>
              
             
            </section>
      </section>
    )
}