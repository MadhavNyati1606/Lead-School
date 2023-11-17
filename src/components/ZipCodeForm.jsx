import React, { useState } from 'react'
import axios from 'axios';
import './ZipCodeForm.css'
const ZipCodeForm = ({ onZipCodeSubmit, setLoading }) => {
    const [zipCode, setZipCode] = useState('');
    

    const handleSubmit = async(e) =>{
        e.preventDefault();
        setLoading(true);
        try{
            const response = await axios.get(`https://api.zippopotam.us/in/${zipCode}`);
            onZipCodeSubmit(response.data);
        }catch(error){
            onZipCodeSubmit(null, 'Failed to fetch the location information');
        }
    }
  return (
    <>
    <div>
        <div className="input">
        <div className='enter'>
            <p>Enter Postal Code: </p>
        </div>
        <div>
            <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
        </div>
        </div>
        <div className='submit'>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>
    </>
  )
}

export default ZipCodeForm
