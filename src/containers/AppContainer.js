import React, { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import AppHeader from '../components/AppHeader'
import CityResponse from '../components/CityResponse'
import City from '../components/City'
import MapContainer from '../components/MapContainer'

function AppContainer(props) {

    const [responseData, setResponseData] = useState('')

    const handleCityChange = async (cityValue) => {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&q=${cityValue},nz`)
      const json = await res.json()
        
      setResponseData(json);
    }

    const handleMapClickChange = async (lat, lon) => {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&lat=${lat}&lon=${lon}`)
      const json = await res.json()

      setResponseData(json)
    }

    const clearResponse = () => {
      setResponseData('')
    }

    return (
      <>
        <AppHeader>
          <City onCityChange={handleCityChange} clearResponse={clearResponse} />
        </AppHeader>

        <MapContainer
          onMapClick={handleMapClickChange}
          responseData={responseData}
        />

        <CityResponse
          responseData={responseData}
          clearResponse={clearResponse}
        />
      </>
    )
}
  
export default AppContainer
