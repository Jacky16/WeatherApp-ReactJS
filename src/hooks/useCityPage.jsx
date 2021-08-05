import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'

import { useParams } from 'react-router-dom'
import { getForecastUrl } from '../utils/urls'
import { toCelcius } from '../utils/utils'

const useCityPage = () =>{
    const [charData, setCharData] = useState(null)
    const [forecastItemList, setForecastItemList] = useState(null)

    const { city, countryCode } = useParams()

    useEffect(() => {
        const getForecast = async () => {

            const url = getForecastUrl({city,countryCode});

            try {
                const { data: charData } = await axios.get(url)

                console.log("data", charData)

                const daysAhead = [0, 1, 2, 3, 4, 5]
                const days = daysAhead.map(d => moment().add(d, 'd'))
                const dataAux = days.map(day => {
                    debugger
                    const tempObjArray = charData.list.filter(item => {
                        const dayOfYear = moment.unix(item.dt).dayOfYear()
                        return dayOfYear === day.dayOfYear()
                    })
                    console.log("day.dayOfYear()", day.dayOfYear())
                    console.log("tempObjArray", tempObjArray)

                    const temps = tempObjArray.map(item => item.main.temp)
                    // dayHour, min, max
                    return ({
                        dayHour: day.format('ddd'), 
                        min: toCelcius(Math.min(...temps)), 
                        max: toCelcius(Math.max(...temps))
                    })
                })
                const interval = [4,8,12,16,20,24];
                const forecastItemListAux = charData.list
                .filter((item,index) => interval.includes(index))
                .map(item =>{
                    return({
                        hour: moment.unix(item.dt).hour(),
                        weekDay: moment.unix(item.dt).format("dddd"),
                        state: item.weather[0].main.toLowerCase(),
                        temperature: toCelcius(item.main.temp)
                    })
                })
                setCharData(dataAux)
                setForecastItemList(forecastItemListAux)            
            } catch (error) {
                console.log(error)            
            }
        }

        getForecast()

    }, [city, countryCode])
    return {city,charData,forecastItemList}
}
export default useCityPage