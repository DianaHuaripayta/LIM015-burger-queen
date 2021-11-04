import React,{useState, useEffect} from 'react';
import { db } from '../../firebase/firebase-config';
import { collection, getDocs } from "firebase/firestore";
import { BodyModal } from './BodyModal';
import { SuccessfulAlert } from '../SuccessfulAlert';
export function ModalSummary() {
  /* const [orders, setOrders] = useState([]);
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
       
      }, []) */
    return (
      <>
      
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Todos los pedidos</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
             {/*  {orders.map((order) => (
                <BodyModal key={order.id} order={order}/>
              ))} */}
              {/*  <BodyModal orders={orders} setOrders={setOrders}/> */}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div></>  
    )
}