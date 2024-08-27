import UserInput from "./assets/components/UserInput"
import { useState } from "react";
import Results from "./assets/components/Results";


function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 5000,
    annualInvestment: 6000,
    expectedReturn: 7,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      };
    } );
  }

  return (
    <>
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className="center">Please enter a duration greater than zero. </p> }
      {inputIsValid && <Results input={userInput}/>}
    </>

  )
}

export default App
