import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value));
   
  }; 
 
  function minus(e) { 
    e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
    e.preventDefault();
    if (inputRef.current.value == 0) {
      
      alert("Error: Cannot divide by 0!")
    }
    else {
      
      setResult((result) => result / Number(inputRef.current.value)); 

    }
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = 0;
  }; 
 
  function resetResult(e) { 
    e.preventDefault(); 
    setResult((result) => 0); 
  }; 

  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}>
          {resultRef.current = result}
        </p>
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        />
        <div>
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtract</button> 
        <button onClick={times}>multiply</button> 
        <button onClick={divide}>divide</button> 
        <button onClick={resetInput}>reset input</button> 
        <button onClick={resetResult}>reset result</button> 
        </div>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
