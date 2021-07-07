import React from "react"

import ForeCastItem from "./ForeCastItem"

export default{
    title: "ForecastItem",
    component: ForeCastItem
}

export const LunesSoleado = () =>(
<ForeCastItem hour={10} state="sunny" temperature={23} weekDay="Lunes"/>)

