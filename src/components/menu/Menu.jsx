import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase-config';
import { collection, getDocs } from "firebase/firestore";
import { ProductsCard } from './ProductsCard.jsx';
import {AddCardForm} from './AddCardForm.jsx'

import './styleMenu.css'
export function Menu() {
  // Declara una nueva variable de estado, que llamaremos "menu".
  const [contentMenu, setDemoMenu] = useState([]); //useState es un Hook
  // Declara una nueva variable de estado, que llamaremos "products".
  const [typeProduct, setProductType] = useState('breakfast')

  /* state button */
  const [buttonActive, setbuttonActive] = useState(false);
  
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
  
  const [card, setCard] = useState([])//agregar tarjetas
    return (
        <section className="containerMenu">
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
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
                            /* -------------- */
                            card={card}/* obtener para agregar al form */
                            setCard={setCard}
                            productMenu={contentMenu}
                           
                          />
                      ))
                    }
                    </div>
                  </section>  
            </section>
            
            <section>
              <AddCardForm card={card} setCard={setCard} buttonActive={buttonActive} setbuttonActive={setbuttonActive}/>
            </section>
            
        </section>
    )
}