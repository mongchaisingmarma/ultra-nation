import React from 'react'

function Country(props) {
    const {name, population, region, flag} =props.country;
    const flagStyle = {
        height : '50px'
    }
    const countryStyle = {
        border : '1px solid red',
        margin : '10px',
        padding : '10px'
    }
    return (
        <div style = {countryStyle}>
            <h4>This is my country : {name}</h4>
            <img style = {flagStyle} src= {flag} alt="" srcset=""/>
            <p>Population : {population}</p>
            <p><small>Region : {region}</small></p>
            <button onClick = {() => props.handleAddCountry(props.country)}>Add Country</button>
        </div>
    )
}

export default Country
