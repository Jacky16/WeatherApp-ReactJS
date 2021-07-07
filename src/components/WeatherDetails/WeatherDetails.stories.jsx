import React from "react"
import WeatherDetails from "./WeatherDetails"
export default{
    title:"Weather Details",
    component: WeatherDetails
}
export const WeatherDetailsExample = () =>{
    return <WeatherDetails humidity={10} wind={9}/>
}