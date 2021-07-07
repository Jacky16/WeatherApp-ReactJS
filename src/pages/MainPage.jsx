import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from "./../components/CityList"
import AppFrame from '../components/AppFrame'
import { Paper } from '@material-ui/core'
const cities =[
    {city:"Barcelona",country:"España"},
    {city:"Madrid",country:"España"},
    {city:"Buenos Aires",country:"Argentina"},
    {city:"Pyonjang",country:"Kore del norte"},
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
