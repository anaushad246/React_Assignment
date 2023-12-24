import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Person from './person.jsx'
import Button from './Button.jsx'
import { btnFunction1 } from './btnFunctions.jsx'
import Header from './header.jsx'
import List from './list.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
    <Person name="Naushad Ahmad" age="24" />
    <Button btnText="Click once" btnFunction={()=> {alert("I am boss")}} />
    <Button btnText="Click again" btnFunction={ btnFunction1 } />
    <List items="Naushad Ahmad"/>
    <List items="Irshad Ahmad"/>
  </React.StrictMode>
)
