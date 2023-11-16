import React from 'react'
import './LocationInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
const LocationInfo = ({ location, error, onClear, loading }) => {
    if(loading){
        return (
        <div className='loading'>
        <FontAwesomeIcon icon={faSpinner} spin size="3x" />
      </div>           
            );
    }
    
    if(error){
        return <div className="error">
            <p>Error: {error}</p>
            </div>
    }

    if(!location){
        return null;
    }


  return (
    <div>
      <h2 className='info-heading'>Location Information</h2>
      <div className="country">
      <h3>Country:</h3>
      <p>{location.country}</p>
      </div>
      <div className="state">
      <h3> State: </h3>
      <p>{location.places[0].state}</p>
      </div>
      <div className="places">
      <h3>Places:</h3>
      <ul>
        {location.places.map((place) => (
          <li key={place['place name']}>
            {place['place name']}
          </li>
        ))}
      </ul>
      </div>
      <button className="btn" onClick={onClear}>Clear</button>
    </div>
  )
}

export default LocationInfo
