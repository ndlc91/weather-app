import React, { useState, Fragment } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Header from './components/Header';
import ToggleScale from './components/ToggleScale';
import Card from './components/Card';

function App() {
  // Store weather data from API
  const [city, setCity] = useState('');

  // Toggle the temperature scale, true is F°, false is C°.  Temp scale will load as F°
  const [farenheit, setFarenheit] = useState(true);

  const [farenheitTemps, setFarenheitTemps] = useState({
    temp: null,
    feels_like: null,
    temp_min: null,
    temp_max: null,
  });

  const [celciusTemps, setCelciusTemps] = useState({
    temp: null,
    feels_like: null,
    temp_min: null,
    temp_max: null,
  });

  let content = (
    <Fragment>
      <div>{farenheitTemps.temp}</div>
      <div>{farenheitTemps.feels_like}</div>
      <div>{farenheitTemps.temp_max}</div>
      <div>{farenheitTemps.temp_min}</div>
    </Fragment>
  );

  const toggleTempScale = (scale) => {
    setFarenheit(scale);
  };

  if (farenheit) {
    content = (
      <Fragment>
        <div>{farenheitTemps.temp}</div>
        <div>{farenheitTemps.feels_like}</div>
        <div>{farenheitTemps.temp_max}</div>
        <div>{farenheitTemps.temp_min}</div>
      </Fragment>
    );
  }
  if (!farenheit) {
    content = (
      <Fragment>
        <div>{celciusTemps.temp}</div>
        <div>{celciusTemps.feels_like}</div>
        <div>{celciusTemps.temp_max}</div>
        <div>{celciusTemps.temp_min}</div>
      </Fragment>
    );
  }

  // Get weather data from API and store in F° and C° state containers
  const getData = async (city_name) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=6beeb1d785c615a90f2fdb4d11dd594a`
    );

    setCity(res.data.name);

    setFarenheitTemps({
      temp: (res.data.main.temp - 273.15) * 1.8 + 32,
      feels_like: (res.data.main.feels_like - 273.15) * 1.8 + 32,
      temp_min: (res.data.main.temp_min - 273.15) * 1.8 + 32,
      temp_max: (res.data.main.temp_max - 273.15) * 1.8 + 32,
    });
    setCelciusTemps({
      temp: res.data.main.temp - 273.15,
      feels_like: res.data.main.feels_like - 273.15,
      temp_min: res.data.main.temp_min - 273.15,
      temp_max: res.data.main.temp_max - 273.15,
    });
  };

  return (
    <div style={styles.app}>
      <div style={styles.overlay}>
        <Header />
        <Card>
          <Search getData={getData} />
          {content}
          <ToggleScale toggleTempScale={toggleTempScale} />
        </Card>
      </div>
    </div>
  );
}

const styles = {
  app: {
    height: '100vh',
    backgroundImage: "url('/images/clouds2.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(60, 60, 60, .3)',
    height: '100vh',
  },
};

export default App;
