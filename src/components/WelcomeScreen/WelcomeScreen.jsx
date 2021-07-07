import React,{useRef,useEffect,useState}from 'react'
import PropTypes from 'prop-types'
import Clouds from "vanta/dist/vanta.clouds.min"
import * as THREE from "three"
const WelcomeScreen = ({children}) => {
    const myRefDiv = useRef(null);//Valor inicial
    const [vanta,setVanta] = useState(0);//Vanta va a ser inicializado
    
    //Se va ejecutar despues de la 1r renderización
    useEffect(() =>{
        console.log("Ref",myRefDiv.current);

        //Solo pasa una vez por dentro del if
        if(!vanta){

            setVanta(Clouds({
                THREE,
                el: myRefDiv.current
            })); //vanta = 1
            //Activo el efecto "cloud"
            
            console.log("Pongo vanta a un valor diferente de 0");
        }
        //Al salir de la pantalla debemos detener el efecto
        //hay que des-asociar todos los recursos(div+vanta effect)
        return () =>{
            //Aquí se va a destruir todos los recursos
            if(vanta){
                vanta.destroy()
                console.log("Libero los recursos")
            }
        }
    },[vanta])//Con esto me aseguro que siga funcionando bien
    return (
        <div ref={myRefDiv}>
            WelcomeScreen
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node
}

export default WelcomeScreen
