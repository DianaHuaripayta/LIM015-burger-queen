import {Link} from "react-router-dom";
import imagenes from "../../assets/img/imagenes";
import './login.css'
export function Login() {
    return (
        <div className="containerLogin">
            <div className="left">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={imagenes[0].img} className="d-block w-100" alt={imagenes[0].title} />
                </div>
                <div className="carousel-item">
                    <img src={imagenes[1].img} className="d-block w-100" alt={imagenes[1].title} />
                </div>
                <div className="carousel-item">
                    <img src={imagenes[2].img} className="d-block w-100" alt={imagenes[2].title} />
                </div>
                </div>
            </div>

            </div>
            <div className="right">
           
            </div>
        </div>
    )
}
     /*  <div>
            <Link to={"/menu/"}> <button type="button" class="btn btn-primary">Mesero</button></Link>
            <button type="button" class="btn btn-primary">Jefe de cocina</button>
        </div> */
