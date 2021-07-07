import React from "react"
import{findByText, render} from "@testing-library/react"
import ForeCastItem from "./ForeCastItem"

test("ForeCastItem render",async ()=>{
    const {findBytext} = render(<ForeCastItem hour={10} state="sunny" temperature={23} weekDay="Lunes"/>)
    
    const hour = await findByText("/10/");
    const state = await findByText("sunny");
    const temperature = await findByText(/23/);
    const weekDay = weekDay="Lunes"

    expect(hour).toHaveTextContent(/10/);
    expect(state).toHaveTextContent("sunny");
    expect(temperature).toHaveTextContent(/23/);
    expect(weekDay).toHaveTextContent("Lunes");


});