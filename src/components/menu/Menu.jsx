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
  const [Type, setType] = useState('breakfast')

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
     /*  console.log(doc.id,'--',doc.data().img, '--',doc.data().type,'--', doc.data().price) */
  
    });

    return arrayProduct;
  };

  useEffect(() => {
    async function fetchList() {
      const listMenu = await getProductsFirebase()
      // eslint-disable-next-line eqeqeq
      setDemoMenu(listMenu.filter(doc => doc.idType == Type));
     // eslint-disable-next-line eqeqeq
     /* console.log(listMenu.filter(doc => doc.idType == Type)) *///bien
    }
    fetchList();
  }, [Type])
  
  const [card, setCard] = useState([])//agregar tarjetas
    return (
        <section className="containerMenu">
          {console.log(contentMenu, 'demo menu')}
          
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                <label className="btn btn-outline-primary" htmlFor="btnradio1"  onClick={() => { setType('breakfast'); } }>Desayuno</label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio2" onClick={() => { setType('lunch'); } }>Almuerzo - Cena</label>
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
              <AddCardForm card={card} setCard={setCard}/>
            </section>
        </section>
    )
}