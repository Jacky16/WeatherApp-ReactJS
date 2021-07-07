import React from "react"
import CityList from "./CityList"
import {render,fireEvent} from "@testing-library/react"

const cities =[
    {city:"Barcelona",country:"España"},
    {city:"Madrid",country:"España"},
    {city:"Buenos Aires",country:"Argentina"},
    {city:"Pyonjang",country:"Kore del norte"},
]
test("City test renders", async () =>{
    const citiesCount = 4;

    const{findAllByRole} = render(<CityList cities ={cities} />)

    const items = await findAllByRole("button");

    expect(items).toHaveLength(citiesCount);
})

test("CityList click on item", async () =>{
    const fnClick = jest.fn();

    const {findAllByRole} = render(<CityList cities = {cities} onClickCity={fnClick}></CityList>)

    const items = await findAllByRole("button");

    fireEvent.click(items[0]);

    expect(fnClick).toHaveBeenCalledTimes(1);
})