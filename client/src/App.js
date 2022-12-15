import React,{useState} from 'react';
import Axios from 'axios';
import './App.css';

function App() {

  const [moive,setMoive] = useState("");
  const [review,setReview] = useState(0);

  const addTolist = () => {
  //console.log(moive + review);
  };
 
  return (
    <div className="App">
    <h1>CURD application</h1>
<div className='form'>
   <label>Moive Name:</label>
    <input type="text" name="moivename  " onChange={(event) => {setMoive(event.target.value)}} /> 
    <label>Review :</label>
    <input type="text" name="review" onChange={(event) => {setReview(event.target.value)}} /> 
    <button onClick={addTolist} >Submit</button>
    </div>
    </div>
  );
}

export default App;
