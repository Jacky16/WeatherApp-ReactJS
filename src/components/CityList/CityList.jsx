import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from "axios"
import convert from 'convert-units'
import Grid from "@material-ui/core/Grid"
import CityInfo from "./../CityInfo"
import Weather from "../Weather"
import { List,ListItem } from '@material-ui/core'
//renderCityAndCountry se convirte en una funcion que retorna otra función
const renderCityAndCountry = (eventOnClickCity,cityAndCountry,weather )=> {
    const {city,country} = cityAndCountry;
    //const {temperature,state} = weather;
    return( 
        <ListItem 
        button
        key={city}
         onClick={eventOnClickCity}>
            <Grid container 
            justify="center"
             alignItems="center">
                 
                <Grid item md ={8} xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
            
                <Grid item md={3} xs={12}>
                   {
                       //Si weather no es undefiened
                       weather ?
                            <Weather temperature={weather.temperature}
                            state={weather.state}/>
                        : ("No hay datos")
                    }
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
    useEffect(() => {
        const setWeather = (city,country,countryCode) =>{
            const apiID = "7d067d3563b3e4fa089c92834ce44155";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiID}`;
            axios.
            get(url).
            then(response =>{
                //Respues del servidor
                const {data} = response;
                const temperature = Number(convert(data.main.temp).from("K").to("C").toFixed(0));
                const state = data.weather[0].main.toLowerCase();
                const propName = `${city}-${country}` //Ej:[Barcelona-españa]
                const propValue = {temperature,state};//Ej: { temperature: 10, state:sunny}
                console.log("Prop value",propValue);
                console.log("Prop name",propName);

                //Los "..." añade una propiedad nueva a "allWeather", si la propiedad es similar, se sobrescribe
                setAllWeather( allWeather => ({...allWeather,[propName]:propValue}))
            })
        }

        cities.forEach(({city,country,countryCode}) => {
            setWeather(city,country,countryCode);
        });
    }, [cities])
    //const weather={temperature:10,state:"sunny"}
    return (
        <List>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity,cityAndCountry,
                    allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
            }
        </List>
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
