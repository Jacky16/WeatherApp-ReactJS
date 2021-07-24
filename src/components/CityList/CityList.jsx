import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from "axios"
import convert from 'convert-units'
import Grid from "@material-ui/core/Grid"
import CityInfo from "./../CityInfo"
import Weather from "../Weather"
import { Alert } from '@material-ui/lab'
import { List,ListItem } from '@material-ui/core'
const getCityCode = (city,countryCode) => `${city}-${countryCode}`
//renderCityAndCountry se convirte en una funcion que retorna otra función
const renderCityAndCountry = (eventOnClickCity,cityAndCountry,weather )=> {
    const {city,country,countryCode} = cityAndCountry;
    //const {temperature,state} = weather;
    return( 
        <ListItem 
        button
        key={getCityCode(city,countryCode)}
         onClick={eventOnClickCity}>
            <Grid container 
            justify="center"
             alignItems="center">
                 
                <Grid item md ={8} xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
            
                <Grid item md={3} xs={12}>
                    <Weather
                        temperature={weather && weather.temperature}
                        state={weather && weather.state}/>
                </Grid>
            </Grid>
        </ListItem>
    ) 
}
const CityList = ({cities,onClickCity}) => {
    /* allWeather estructura:
        {
            [Barcelona-españa]:{ temperature: 10, state:sunny},
            [Madrid-españa]: { temperature: 16, state:rain}
        }
    */
    const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async(city,countryCode) =>{
            const apiID = "7d067d3563b3e4fa089c92834ce44155";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiID}`;

            try{
                const response = await axios.get(url)

                //Respues del servidor
                const {data} = response;
                const temperature = Number(convert(data.main.temp).from("K").to("C").toFixed(0));
                const state = data.weather[0].main.toLowerCase();
    
                const propName = getCityCode(city,countryCode) //Ej:[Barcelona-españa]
                const propValue = {temperature,state};//Ej: { temperature: 10, state:sunny}
    
                //Los "..." añade una propiedad nueva a "allWeather", si la propiedad es similar, se sobrescribe
                setAllWeather( allWeather => ({...allWeather,[propName]:propValue}))
            }catch(error){
                //Errores del servidor
                //El servidor nos responde con errores
                if(error.response){
                    setError("Ha ocurrido un error para obtener el clima");
                }//Errores que pasan por no llegar al servidor
                else if(error.request){
                    setError("Comprueba la conexión a internet");
                }//Errores imprevistos
                else{
                    setError("Error al cargar los datos");
            }
        }
    }

        cities.forEach(({city,country,countryCode}) => {
            setWeather(city,countryCode);
        });
    }, [cities])
    //const weather={temperature:10,state:"sunny"}
    return (
        <div>
            {
                error && <Alert severity="error" onClose = {() => setError(null)}>{error}</Alert>
            }
            <List>
                {
                    cities.map(cityAndCountry => renderCityAndCountry(onClickCity,cityAndCountry,
                        allWeather[getCityCode(cityAndCountry.city,cityAndCountry.countryCode)]))
                }
            </List>
        </div>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            country: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired
        })
    ).isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
