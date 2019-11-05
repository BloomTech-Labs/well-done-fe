import React, {useState} from 'react'
import {countries} from '../../data/countries'
import './Filter.styles.scss'
import Toggle from '../Toggle/Toggle.component'

const Filter = () => {
    

    return (
        <div class="filter">
            <h4>Country</h4>
            <select name="countries"> 
                {countries.map(country => (
                    <option value={country}>{country}</option>
                ))} 
            </select>

            <h4>Status</h4>
            <div class="pump-type">
                <p>Functional</p>
                <Toggle/>
            </div>
            <div class="pump-type">
                <p>Unknown</p>
                <Toggle/>
            </div>
            <div class="pump-type">
                <p>Non-Functional</p>
                <Toggle/>
            </div>
        </div>
    )
}

export default Filter
