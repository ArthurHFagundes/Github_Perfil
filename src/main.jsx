import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './global.css'

import { PI as numeroPi, GTM_BRASIL } from './teste'  // importar o PI que tem dentro das chaves no export do arquivo teste.js como "numeroPi"
import nomes from './NOMES.JS' // o nome do arquivo original era "NOMES.JS", eu errei e coloquei em capslock

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* {numeroPi} */}
    <App />
  </StrictMode>,
)
