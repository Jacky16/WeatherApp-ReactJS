import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import IconState,{validValues} from "./../IconState"
import {IconContext} from "react-icons"
import { Grid } from '@material-ui/core'

const Weather = ({temperature,state}) => {
    return (
        <Grid container item direction="row" justify="center" alignItems="center" spacing={1}>
            <IconContext.Provider value = {{size:"6em"}} >
                
                <IconState state= {state}></IconState>

            </IconContext.Provider>
            <Typography variant="h2" display="inline" > {temperature} </Typography>
        </Grid>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
}

export default Weather

