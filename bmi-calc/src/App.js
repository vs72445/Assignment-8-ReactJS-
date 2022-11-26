import React, { useState } from 'react';
import './App.css';

function App() {

  // making states for the application...
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  // logic of calculation...
  let bmiCalc = (e) =>{
    e.preventDefault();

    if (weight===0 && height===0){
      alert('Please enter some value to get result.')
    }
    else {
      let bmi = (weight/(height*height)*10000);
      setBmi(bmi.toFixed(1))

      if (bmi<18.5) {
        setMessage('You are Underweight, you need to gain some weight.')
      }
      else if (bmi>=18.5 && bmi <=25) {
        setMessage('You are Healthy.')
      }
      else{
        setMessage('Your are Overweight, you need to loose some weight.')
      }

    }
  }


  // reset inputs...
  let reset = () => {
    window.location.reload();
  }




  return (
    <div className="App">

      <div className="container">
        <h2 className='text'>BMI Calculator</h2>
        <form onSubmit={bmiCalc}>

          <div className="firstInput">
            <label htmlFor="">Weight (kgs)</label>
            <input type={Number} value={weight} placeholder={0} onChange={(e)=> setWeight(e.target.value)} />
          </div>

          <div className="secondInput">
            <label htmlFor="">Height (cm)</label>
            <input type={Number} value={height} placeholder={0} onChange={(event)=> setHeight(event.target.value)} />
          </div>

          <div className="btns">
            <button className='btn find' type='submit'>Find</button>
            <button className='btn reset' type='submit' onClick={reset}>Reset</button>
          </div>

        </form>

        <div className="text">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

      </div>

    </div>
  );
}

export default App;
