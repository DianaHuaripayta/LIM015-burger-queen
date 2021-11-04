import React,{useState, useEffect} from 'react';
import { db } from '../../components/firebase/firebase-config';
import { collection, getDocs } from "firebase/firestore";
import { CardsSummary } from './CardsSummary.jsx';
import './cardsSummary.css'
export function OrdersProduct() {
    const [orders, setOrders] = useState([]);
    const getOrdersFirebase = async () => {
        const document = [];
        const querySnapshot = await getDocs(collection(db, "orders"));
        querySnapshot.forEach((doc) => {
            document.push({
            id: doc.id,
            nameCustomer: doc.data().nameCustomer,
            products: doc.data().products,
            status: doc.data().status
          })
          console.log(document);
          
        });
        
        return document;
      };
      useEffect(() => {
        async function fetchList() {
          const listMenu = await getOrdersFirebase()
          setOrders(listMenu.filter(doc => doc.status === 'pending'));
        }
        fetchList(); 
       
      }, [])
    return (
        <div className="containerMain">
             {orders.map((order) => (
                <CardsSummary key={order.id} order={order}/>
              ))}
        </div>
    )
}
