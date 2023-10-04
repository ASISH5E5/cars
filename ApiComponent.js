import React, { useState } from 'react';
import axios from 'axios';

const ApiComponent = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);

  const fetchData = async () => {
    const url = `https://parseapi.back4app.com/classes/Carmodels_Car_Model_List?count=1&limit=6`;
    const options = {
      method: 'GET',
      headers: {
        'X-Parse-Application-Id': 'MfOEPL5HoUYXPLGNMjv3PkiMIm7Qsp3dS8tGU69n', // This is your app's application id
        'X-Parse-REST-API-Key': 'gOypfTZiiiZH3DE3GojToBgpwSK3gMXpuCkzQSsT',
      },
    };

    try {
      const response = await axios.get(url, options);
      setData(response.data);
      setPage(response.slice(0,12));
    } catch (err) {
      setError('An error occurred while fetching data.');
      console.error(err);
    }
  };

  return (
    <div>
      <h1>API Response by Name:</h1>
      <input
        type="text"
        placeholder="Enter a name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={fetchData}>Fetch Data</button>
      {error ? (
        <p>{error}</p>
      ) : (
        <pre>{JSON.stringify(apiData, null, 2)}</pre>
      )}
    </div>
  );
};

export default ApiComponent;
