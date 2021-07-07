import React from "react"
import CityInfo from "./CityInfo"
import {findAllByRole, render} from "@testing-library/react"

test("CityInfo render",async () =>{
    const country = "España";
    const city = "Barcelona";
    // Arrange Act Act(AAA)
    const {findAllByRole} = render(<CityInfo city={city} country= {country}></CityInfo>)
    


//findAllByRole busca todos los componentes que sean "heading" (en este caso)
const cityAndCountryComponents = await findAllByRole("heading");

// //Cuando el test va a ser correcto?
// //expect es una palabra reservada que nos proporciona "testjert"

expect(cityAndCountryComponents[0]).toHaveTextContent(city)
expect(cityAndCountryComponents[1]).toHaveTextContent(country)
})