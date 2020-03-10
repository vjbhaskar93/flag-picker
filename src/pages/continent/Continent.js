import React from 'react';
import './Continent.css';
import _continents from './../../utils/continents.json'

const Continent = (props) => {
    const selectedCont = (e) => {
        // check if the input is matching with existing continent
        const checkContinent = _continents.filter(itm => itm.continent === e.target.value);
        if (checkContinent && checkContinent.length) {
            props.setSelectedContinent(e.target.value)
        } else {
            props.setSelectedContinent('');
        }
        props.setSelectedCountry(''); // reset country selection on changing continent
    }
    return (
        <>
            <div className="fonth3">Select a Continent</div>
            <input name="continent" list="continent-list" onChange={(e) => selectedCont(e)} className="textField" />
            <datalist id="continent-list">
                {_continents.map((item, index) =>
                    <option key={index} value={item.continent}>{item.continent}</option>
                )}
            </datalist>
        </>
    )
}
export default Continent;