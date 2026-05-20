// experiment 7
// import React from 'react'
// import'./App.css'
// const App = () => {
//   return (
//     <div className="container">
//       <h1>Student Information</h1>

//       <div className="card">
//         <h2>Rahul Sharma</h2>
//         <p>Course: Computer Science</p>
//         <p>Marks: 85</p>
//       </div>

//       <div className="card">
//         <h2>Anita Verma</h2>
//         <p>Course: Information Technology</p>
//         <p>Marks: 92</p>
//       </div>

//       <div className="card">
//         <h2>Rohan Gupta</h2>
//         <p>Course: Electronics</p>
//         <p>Marks: 78</p>
//       </div>
//     </div>
//   )
// }

// experiment8
export default App
import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>React Counter Application</h2>
        <h1>{count}</h1>

        <div className="buttons">
          <button onClick={increment}>Increment (+)</button>
          <button onClick={decrement}>Decrement (-)</button>
        </div>

        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
