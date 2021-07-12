import React from 'react'
import PropTypes from 'prop-types'
import { WiCloud,  
    WiDaySunny,
    WiRain,
    WiThunderstorm,
    WiRaindrop,
    WiSnow
 } from 'react-icons/wi'

    //Thunderstorm Drizzle Snow Clear Clouds
export const validValues = [
        "clouds",
        "fog",
        "clear",
        "rain",
        "drizzle",
        "thunderstorm",
        "snow"
    ]

const stateByName = {
    clouds: WiCloud,
    clear: WiDaySunny,
    rain: WiRain,
    snow:WiSnow,
    drizzle:WiRaindrop,
    thunderstorm:WiThunderstorm

}

const IconState = ({ state }) => {
    const StateByName = stateByName[state]
    return (
        <StateByName />
    )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired,
}

export default IconState
