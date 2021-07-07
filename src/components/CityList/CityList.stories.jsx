import React from "react"
import CityList from "./CityList"
import {action} from "@storybook/addon-actions"
export default{
    title: "CityList",
    component: CityList
}
const cities =[
    {city:"Barcelona",country:"España"},
    {city:"Madrid",country:"España"},
    {city:"Buenos Aires",country:"Argentina"},
    {city:"Pyonjang",country:"Kore del norte"},
]
export const CityListExample =  () => <CityList cities={cities} onClickCity={action("Click en city")}/>