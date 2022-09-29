import './home.css'
import img2 from './../../img/briscacomjugar.jpg'






const Home = () => 
{
    return (
        <div id='Home'>
            <div id='Container'>
                
                <h1 id='Hello'>Briscola.</h1>
                <h1>
                Bienvenidos a las instrucciones de "La Brisca" , la Brisca es un juego perteneciente
                a la familia del Tute, es decir, un juego donde no se distribuyen las cartas al inicio ,
                ya que estas se van tomando del mazo segun se va jugando.               

                </h1>
            </div>
            <img id='Img2' src={img2} alt='Img2'/>
        </div>
    );
}
export default Home;