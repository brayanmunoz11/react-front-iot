import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Card from 'react-bootstrap/Card';
import { useFetchData } from './components/fetch';
import logotemperatura from './assets/temperatura-logo.png';
import logohumedad from './assets/humedad-logo.png';

function App() {

  const BASE_URL = 'https://iot-nyfu.onrender.com/publicar';
  const { data, loading, error } = useFetchData(BASE_URL);
  if (loading) return "Loading ...";
	if (error) return `Error ${error}`;
  
  return (
    <div className="App">
      <br/>
      <br/>
      <br/>
      <h3>Monitoreo</h3>
      <center>
      <Card style={{ width: '18rem' }}>
        <center>
          <Card.Img style={{ width: '4rem' }} variant="top" src={logotemperatura}/>
        </center>
          <Card.Body>
            <Card.Title>Temperatura</Card.Title>
            <Card.Text>
              La temperarura actual es: 
              <h3>{data? data.temperatura : "loading ......"}</h3>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <center>
            <Card.Img style={{ width: '4rem' }} variant="top" src={logohumedad} />
          </center>
          <Card.Body>
            <Card.Title>Humedad</Card.Title>
            <Card.Text>
              La humedad actual es:
              <h3>{data? data.humedad : "loading ......"}</h3> 
            </Card.Text>
          </Card.Body>
        </Card>
      </center>
    </div>
  )
}

export default App
