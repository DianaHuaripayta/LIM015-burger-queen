import {Link} from "react-router-dom";
import imagenes from "../../assets/img/imagenes";
import './login.css'
export function Login() {
    return (
        <section className="containerLogin">
           <div className='boxImg'>
            <img src={imagenes[0].img} alt={imagenes[0].title} className="designImg"/>
            <p className="burgerQueen">BURGER QUEEN</p>
           </div>
           <div>
           <Link to={"/menu"}> <button type="button" className="btn btn-primary">Mesero</button></Link>
            <button type="button" className="btn btn-primary">Jefe de cocina</button>
           </div>
        </section>
    )
}
     /*  <div>
            <Link to={"/menu/"}> <button type="button" class="btn btn-primary">Mesero</button></Link>
            <button type="button" class="btn btn-primary">Jefe de cocina</button>
        </div> */
