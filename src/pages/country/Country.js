import React, { useEffect, useState } from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import _continents from './../../utils/continents.json';
import './Country.css';

const Country = (props) => {
    const [countries, setCountries] = useState([]);

    const onSelectCountries = (countries) => {
        props.setSelectedCountry(countries.map(itm => itm.value))
    }

    useEffect(() => {
        const filteredCountries = _continents.filter(itm => itm.continent === props.selectedContinent)[0];
        if (filteredCountries.countries && filteredCountries.countries.length) {
            filteredCountries.countries.forEach(itm => {
                itm.label = itm.name; itm.value = itm.flag // compatible with react multi select plugin
            })
            setCountries(filteredCountries.countries)
        }
    }, [props.selectedContinent])

    // set custom styles for multi select field
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            padding: 20,
            textAlign: 'left'
        }),
    }

    return (
        <>
            <div className="countryFont">Now, Select a Country</div>
            <ReactMultiSelectCheckboxes options={countries} onChange={(e) => onSelectCountries(e)} width={300} styles={customStyles} />
        </>
    )
}
export default Country;