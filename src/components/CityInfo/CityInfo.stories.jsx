import React from 'react'
import CityInfo from './CityInfo'
import "typeface-roboto"

export default{
    title:"CityInfo",
    component: CityInfo
}
export const CityExample = () => 
<CityInfo city={"Barcelona"} country={"España"}/>