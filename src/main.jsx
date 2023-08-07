import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)

//Desactivo el StrictMode por que hace que los componentes se monten y desmontenten una vez antes de montarse definitivamente
// De todas formas esto solo pasa en dev, no en prod, dejar el Strict en prod.
// Ver: https://stackoverflow.com/questions/72481736/why-is-my-react-component-always-mounted-unmounted-and-mounted-again