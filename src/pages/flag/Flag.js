import React, { useEffect, useState } from 'react';
import './Flag.css';
const Flag = (props) => {
    const [countries, setCountries] = useState();
    useEffect(() => {
        setCountries(props.selectedCountry)
    }, [props.selectedCountry])
    return (
        <>
            <div style={{ marginBottom: "20px" }}>
                {countries && countries.length > 0 &&
                    countries.map(image =>
                        <img alt={""} src={require(`./../../assets/images/` + image + `.png`)} width="40" height="30" />
                    )
                }
            </div>
            <button className="btn btn-primary" onClick={() => setCountries([])}  >Clear Flags</button>
        </>
    )
}
export default Flag;