import { Link } from 'react-router-dom';
import { OrdersProduct } from '../components/chef/OrdersProduct.jsx';
import '../components/chef/stylePageChef.css'
export function Chef() {
    return (
        <div>
            <OrdersProduct/>

           <div className='designButtonVolver'>
           <Link to="/">
                <button type="button" className="btn btn-primary"> Volver</button>
            </Link>
           </div>
            
        </div>
    )
}
