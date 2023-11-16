
import { useState } from 'react';
import './App.css'
import ZipCodeForm from './components/ZipCodeForm';
import LocationInfo from './components/LocationInfo';

function App() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleZipCodeSubmit = (data, message) =>{
    setLoading(false);
    setError(message);
    setLocation(data);
  }

  const handleClear = () =>{
    setLocation(null);
    setError(null);
  }
  return (
    <div className='app'>
      <h1 className='heading'>Zip Code Information App</h1>
      <div className='form'>
      <ZipCodeForm onZipCodeSubmit={handleZipCodeSubmit} setLoading={setLoading} />
      </div>
      <div className='response'>
      <LocationInfo location={location} error={error} onClear={handleClear} loading={loading} />
      </div>
    </div>
  )
}

export default App
