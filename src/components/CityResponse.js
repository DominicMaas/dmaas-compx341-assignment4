import React from 'react'

function CityResponse(props) {

    if (props.responseData === null || props.responseData === '') {
        return null;
    }

    if (props.responseData.cod === '400' || props.responseData.cod === '404') {
        setTimeout(function() { props.clearResponse(); }, 20000);
        return (   
            <div className="container">
                <div className="alert alert-danger mt-2 shadow-lg" role="alert">
                    {props.responseData.message}
                </div>
            </div>          
        )
    }


    /*

     <div className="container">
          <div className="row mt-4">
            <div className="col-sm-4"></div>
            <div className="col-sm-4"></div>
            <div className="col-sm-8">
              <CityResponse
                responseData={responseData}
                clearResponse={clearResponse}
              />
            </div>
          </div>
        </div>


    */

    if(props.responseData.cod === 200) {
        return (        
            <div className="container">
                <div className="row mt-2">
                    <div class="col-sm"></div>
                    <div class="col-sm"></div>
                    <div className="col-sm">
                        <style jsx="true">{`
                            .city-holder {
                                position: absolute;
                            }
                        `}
                        </style>
                        <table className="table table-hover shadow-lg rounded bg-white p3 city-holder table-borderless">
                            <tbody>
                                <tr>
                                    <th scope="row">City</th>
                                    <td>{props.responseData.name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Temperature</th>
                                    <td>{props.responseData.main.temp}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Pressure</th>
                                    <td>{props.responseData.main.pressure}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Humidity</th>
                                    <td>{props.responseData.main.humidity}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Temperature (Min)</th>
                                    <td>{props.responseData.main.temp_min}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Temperature (Max)</th>
                                    <td>{props.responseData.main.temp_max}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Conditions</th>
                                    <td>{props.responseData.weather[0].description}</td>
                                </tr>
                            </tbody>
                        </table>  
                    </div>
                </div>
            </div> 
        )
    }
    return null
}
  
export default CityResponse