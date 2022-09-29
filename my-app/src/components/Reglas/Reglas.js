import './Reglas.css'
import img3 from './../../img/briscacards.jpg'





const AS = 
<ul>
    <li id='tit'>     AS </li>
    <li><br/><br/><br/> 11 Puntos</li>
</ul>
const TRES = 
<ul>
    <li id='tit'>     Tres </li>
    <li><br/><br/><br/> 10 Puntos</li>
</ul>
const REY = 
<ul>
    <li id='tit'>     Rey </li>
    <li><br/><br/><br/> 4  Puntos</li>
</ul>
const CABALLO = 
<ul>
    <li id='tit'>     Caballo </li>
    <li><br/><br/><br/> 3 Puntos</li>
</ul>
const SOTA = 
<ul>
    <li id='tit'>     Sota </li>
    <li><br/><br/><br/> 2 Puntos</li>
</ul>





const totalSkills = [AS,TRES,REY,CABALLO,SOTA]

const Skills = () => 
{
    return (
        <div id='skills'>
            <a id='DIS'>
            Objetivo del juego 
            </a>
            <p id='textoskills'>
            Reunir en las bazas ganadas por un jugador o una pareja de jugadores más puntos que los adversarios.
            </p>
            <p id='DIS'>
            Baraja de cartas 
            </p>
            <p id='textoskills'>
            Se juega con una baraja española de 40 cartas.
            </p>
            <p id='DIS'>
            Número de juegos 
            </p>
            <a id='textoskills'>
            Puede jugarse entre dos o más jugadores, pero normalmente, se juega entre dos o cuatro. En este último caso, se juega por parejas.            
            </a>
            <p id='DIS'>
            Orden y valor de las cartas 
            </p>
            <p id='textoskills'>
            
El orden, de mayor a menor, es el siguiente: as, tres, rey, caballo, sota, siete, seis, cinco, cuatro y dos. El valor de las cartas, en cualquiera de los cuatro palos, es :
            </p>

            <div id='SkillsContainer'>
            {totalSkills.map(skills => {
                return (
                    <div id='lista'>
                        {skills}
                    </div>

                )
            })}
        
            </div>


            <h2 id='DIS'>
            Distribución de las cartas
            </h2>

            <p id='textoskills'>
            Cada jugador toma una carta y la enseña. Los dos jugadores que tengan las dos cartas mayores juegan contra los que tengan las cartas menores.

            Reparte el jugador que sacó la carta más alta y elige sitio, sentándose frente a él su compañero, y a su derecha, el jugador contrario que sacó la carta mayor.   
            </p>
            <p id='textoskills'>
            El jugador que da las cartas, las barajará ofreciéndoselas a cortar al de su izquierda, quien al hacerlo, no podrá tomar ni dejar menos de cuatro cartas. Después, distribuirá tres cartas a cada jugador, de una en una, en sentido contrario a las agujas del reloj, descubriendo la carta siguiente, que es la que señala el palo de triunfo, y que quedará a la vista junto al mazo en el centro de la mesa.El turno de dar, en los juegos siguientes, continúa por orden riguroso de izquierda a derecha.
            </p>
            <h4 id='DIS'>
            Inicio y marcha del juego
            </h4>
            <p id='textoskills'>
            Inicia el juego el jugador situado a la derecha del dador, el “mano”, jugando una carta que dejará descubierta sobre la mesa. Los demás jugadores, al llegarles su turno, pueden jugar una carta cualquiera, sin obligación de asistir al palo ni jugar triunfo. Gana la baza la mayor carta jugada del palo de triunfo y, en su defecto, la carta más alta del palo de salida.
            </p>

            <p id='textoskills'>
            Cada jugador robará una carta del mazo, comenzando por el que haya ganado la baza.
            </p>

            <p id='textoskills'>
            Inicia la baza siguiente el jugador que ganó la anterior, que jugará una carta cualquiera, continuando los demás por orden riguroso de izquierda a derecha en la forma ya explicada. El juego termina cuando ya no quedan cartas que robar en el mazo y se han jugado todas las de la mano.
                        </p>
            <p id='textoskills'>
            Cualquier jugador, después de haber ganado una baza y antes de robar carta del mazo, puede recoger la carta que marca el triunfo y sustituirla por el siete del mismo palo; el siete de triunfo y cualquier carta menor que ésta, puede sustituirse por el dos de triunfo. Este cambio no podrá hacerse después de haber jugado la penúltima baza.
            </p>

            <img id='Img3' src={img3} alt='Img2'/>

            <h5 id='DIS'>
            Tanteo del juego
            </h5>
            <p id='textoskills'>
            Previamente y de común acuerdo, los jugadores determinarán el número de juegos que formarán la partida, depositando la cantidad acordada al inicio en un platillo, que se llevará el jugador o pareja que gane.
            </p>
            <p id='textoskills'>
            Una vez terminado un juego, cada jugador o pareja sumará el valor de las cartas que forman sus bazas, ganando el juego quien más tantos alcance. Si se juega por parejas, el tanteo es común a ambos jugadores. Puede haber empate en el tanteo, cuando cada jugador o pareja hace 60 tantos, en cuyo caso se anula ese juego. Gana la partida el jugador o pareja que antes logre ganar el número de juegos previamente estipulado.
            </p>
            


            
            










        </div>
        
    );
}
export default Skills;