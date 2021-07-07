import React from 'react'
import PropTypes from 'prop-types'
import Grid from "@material-ui/core/Grid"
import CityInfo from "./../CityInfo"
import Weather from "../Weather"
import { List,ListItem } from '@material-ui/core'
//renderCityAndCountry se convirte en una funcion que retorna otra función
const renderCityAndCountry = (eventOnClickCity,cityAndCountry )=> {
    const {city,country} = cityAndCountry

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
                    <Weather temperature={10} state="sunny"/>
                </Grid>
            </Grid>
        </ListItem>
    ) 
}
const CityList = ({cities,onClickCity}) => {
    return (
        <List>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity,cityAndCountry))
            }
        </List>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf({
         country: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
    }).isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
