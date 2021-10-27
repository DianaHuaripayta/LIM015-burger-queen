import { db } from "../firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";
export function ButtonSend() {
    const sendOrden = async () =>{
        let ordersProduct = {};
      /*   ordersProduct.name = inputName.current.value || "sinNombre"; */
        try {
            const docRef = await addDoc(collection(db, "orders"), {
               /*  name:inputName.current.value = ""  || "sinNombre", */
                surname: 'huaripayta'
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
 
    return (
        <div>
             <button type="button" className="btn btn-primary" onClick={sendOrden}>Enviar Pedido</button>
        </div>
    )
}
