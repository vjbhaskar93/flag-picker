import React, { useState } from 'react';
import Continent from './continent/Continent';
import Country from './country/Country';
import Flag from './flag/Flag';
import './MainTemplate.css';
const MainTemplate = () => {
    const [selectedContinent, setSelectedContinent] = useState("");
    const [selectedCountry, setSelectedCountry] = useState([]);
    return (
        <>
            <div className="wrapper">
                <div className="container-login100">
                    <div className="wrap-login100 p-l-10 p-r-10 p-t-10 p-b-10">
                        <div className="text-center" style={{ marginBottom: "30px" }}>
                            <h1 className="fontH1">Flag Picker</h1>
                            <p>
                                This app will help you to learn flags around the world in 3 steps
                            </p>
                        </div>
                        <div className="main-progress">
                            <div className="row">
                                <ul className="progressbar">
                                    <li>
                                        <h3 className="fontH3">Step 1</h3>
                                    </li>
                                    {/* step 2 heading based on selecting continent */}
                                    {selectedContinent &&
                                        <>
                                            <li style={{ borderLeft: "1px solid #ccc", borderRight: "1px solid #ccc", marginBottom: "15px" }}>
                                                <h3 className="fontH3">Step 2</h3>
                                            </li>
                                            {/* step 3 heading based on selecting countries */}
                                            {selectedCountry && selectedCountry.length > 0 &&
                                                <li>
                                                    <h3 className="fontH3">Step 3</h3>
                                                </li>
                                            }
                                        </>
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                {<Continent setSelectedContinent={setSelectedContinent} setSelectedCountry={setSelectedCountry} />}
                                {selectedContinent &&
                                    <><h4>You Selected</h4><br /> <span>{selectedContinent}</span></>
                                }
                            </div>
                            <div className="col-md-4">
                                {/* step 2 content based on selecting continent */}
                                {selectedContinent && <Country selectedContinent={selectedContinent} setSelectedCountry={setSelectedCountry} />}
                            </div>
                            <div className="col-md-4">
                                {/* step 3 content based on selecting countries */}
                                {selectedContinent && selectedCountry && selectedCountry.length > 0 && <Flag selectedCountry={selectedCountry} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainTemplate;