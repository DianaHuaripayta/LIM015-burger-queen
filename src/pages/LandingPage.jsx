import imagenes from "../assets/img/imagenes"
import { PruebaButtons } from "../components/landingPage/PruebaButtons.jsx"
import '../components/landingPage/styleLandingPage.css' 
export function LandingPage() {
    return (
           <div className="container">
               <div className='right'>
                <img width={500} height={625} src={imagenes[0].img} alt={imagenes[0].title} />
               </div>
               <div className='left'>
                <PruebaButtons/>
               </div>
           </div>
    )
}
