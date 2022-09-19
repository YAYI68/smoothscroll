import { useState, useRef, useMemo, useEffect } from 'react';
import './App.css';

function App() {
   const [ isVisible, setIsVisible] = useState(false);
   const targetRef = useRef(null); 
 
   const callback = (entries)=>{
    const [ entry] = entries;
    setIsVisible(entry.isIntersecting);
   }

   const options = useMemo(()=>{
    return {
      root:null,
      rootMargin:'0px',
      threshold:0.3,
    }
   },[])

   useEffect(()=>{
       const observer = new IntersectionObserver(callback,options)
       const currentTarget = targetRef.current;
       if (currentTarget) observer.observe(currentTarget);
       return ()=>{
        if(currentTarget) observer.unobserve(currentTarget);
       }
   },[targetRef,options])
   

  return (
     <>
      <h1 className="header">
        <p>{isVisible?'not in the viewport': 'in the viewport'}</p>
      </h1>
      <div className='gap'></div>
        <img  ref={targetRef} src="./images/attraction.jpg" alt="simpsons" />  
     </>
  );
}

export default App;
