import React from 'react'
import './Search.styles.scss'

const Search = props => {
  const handleChange = event => {
    if (event.target.value.length !== 0) {
      let filtered = props.sensors.filter(
        pump =>
          pump.village_name
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          '' + pump.sensor_pid === event.target.value
      )
      props.setSearchFiltered(filtered)
    } else {
      props.setViewport({
        latitude: 13.5651,
        longitude: 104.7538,
        width: '100vw',
        height: '100vh',
        zoom: 8,
      })
    }
  }

  return (
    <div className='search'>
      <input
        type='text'
        placeholder='Search village or sensor physical ID'
        onChange={handleChange}
      />
      <div className='filtered'>
        {props.searchFiltered.map((place, i) => (
          <h2 key={i}>{place.village_name}</h2>
        ))}
      </div>
    </div>
  )
}

export default Search
