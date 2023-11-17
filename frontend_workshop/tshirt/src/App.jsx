import { useState } from 'react'
import tshirt from './assets/tshirt.png'
import './App.css'

function App() {
  const [textContent, setTextContent] = useState("");
  const handleChange = (event) => {
    setTextContent(event.target.value)
  }
  return (
    <>
    <div className='container'>
        <img src={tshirt} alt="the tshirt" id="tShirt"/>
        <div className='displayBox'>
          <h1>{textContent}</h1>
        </div>
    </div>
    <footer>
      <label htmlFor="shirtText"> Add some text</label>
      <input type="text" id="shirtText" onChange={handleChange} value={textContent} maxLength={15}/>
    </footer>
      
    </>
  )
}

export default App
