const cities = [
    { city: "Barcelona", country: "España", countryCode: "ES"},
    { city: "Madrid", country: "Epaña", countryCode: "ES"},
    { city: "London", country: "United Kingdom", countryCode: "UK"},
    { city: "Arenys de mar", country: "España", countryCode: "ES"},
]

export const getCities = () => (cities)

export const getCountryNameByCountryCode = (countryCode) => (
    cities.filter(c => c.countryCode === countryCode)[0].country
)