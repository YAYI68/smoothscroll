import { useState } from 'react';
import './App.css';

function App() {
   const [ isVisible, setIsVisible] = useState(false);

  return (
     <>
      <h1 className="header">
        <p>{isVisible?'not in the viewport': 'in the viewport'}</p>
      </h1>
      <div className='gap'></div>
        <img src="./images/attraction.jpg" alt="simpsons" />  
     </>
  );
}

export default App;
