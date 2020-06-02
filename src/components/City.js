import React, { useState } from 'react';

function City(props) {

    const [validationError, setValidationError] = useState(null);
    const [text, setText] = useState(null);

    const validate = (event) => { 
        const city = event.target.value.trim();
        if (city === "") {
            setValidationError('enter a city name');
            props.clearResponse();
        } else {
            setValidationError('');
            props.onCityChange(city);
        }
    };

    return (
        <div className="col-sm-4">
            <div className="row">
                <div className="col-sm-10">
                    <style jsx="true">{`
                        .form-control::-webkit-input-placeholder {
                            color: #aaa;
                        }
                    `}
                    </style>
                    <input 
                        type="text" 
                        text={text}
                        className="form-control" 
                        id="usr" 
                        placeholder="Enter city name..."
                        onKeyPress={(event) => {
                            if (event.key === "Enter") {
                                validate(event);
                            }
                        }}
                    ></input>   
                </div>
            </div>
            <div className="pl-3 row">
                <div className="text-danger small"> { validationError }</div>
            </div>
        </div>
    );
}

export default City