import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import IconState,{validValues} from '../IconState'
import { IconContext } from 'react-icons'



const ForeCastItem = ({weekDay,hour,state,temperature}) => {
    return (
        <Grid container="column" justify="center" alignItems="center" direction="column">
            <Grid item>
                <Typography>{ weekDay }</Typography>
            </Grid>

            <Grid item>
                <Typography>{hour}</Typography>
            </Grid>

            <Grid item>
                <IconContext.Provider value={{size:"4em"}}>
                    <IconState state={state}></IconState>
                </IconContext.Provider>
            </Grid>

            <Grid item>
                <Typography>{ temperature }</Typography>
            </Grid>

        </Grid>
    )
}

ForeCastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,

}

export default ForeCastItem
