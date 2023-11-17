import './App.css';
import Greeting from './greeting.jsx';
import AnimalList from './Animals';
import { useState } from 'react';

const orgTitle = "ABCDE";
const secondOrg = "second";
function App() {
  const [animalNum, setAnimalNum] = useState(0);
  const handleClick=()=>{
    setAnimalNum(animalNum + 1)
  }
  // in functions, this is always js 
  const username = "zoe";
  return (
    // in return it is component 
    <>
    <button onClick={handleClick}>Add animal</button>
    <p>You have this many animals: {animalNum}</p>
    <h1>Hi this is animal adoption</h1>
    {/* // you can use {} in here, to let it know that this is js*/}
    <AnimalList title={orgTitle}/>
    <AnimalList title={secondOrg}/>
    </>
  )
}

export default App 
