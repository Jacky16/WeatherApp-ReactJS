import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from "./../components/CityList"
import AppFrame from '../components/AppFrame'
import { Paper } from '@material-ui/core'

const cities =[
    {city:"Barcelona",country:"España",countryCode:"ES"},
    {city:"Madrid",country:"España",countryCode:"ES"},
    {city:"Buenos Aires",country:"Argentina",countryCode:"AR"},
    {city:"London",country:"England",countryCode:"UK"}
]

const MainPage = props => {
    const history = useHistory();
    const onClickHandler = () =>{
        //Permite cambiar la URL por programación
        history.push("/city");
    }
    return (
        <AppFrame>
            <Paper elevation={3} >
                <h2>Lista de ciudades</h2>
                <CityList cities={cities} 
                onClickCity={onClickHandler}></CityList>
            </Paper>
        
        </AppFrame>
    )
}


export default MainPage
