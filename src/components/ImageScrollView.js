import { useRef } from 'react';
import { useElementOnScreen } from '../hooks/useElementOnScreen';

export const ImageScrollView = () => {
    const targetRef = useRef(null); 
    const isVisible =  useElementOnScreen({
      root:null,
      rootMargin:'0px',
      threshold:0.3,
    },targetRef)
     
    return (
       <>
        <h1 className="header">
          <p>{isVisible?'in the viewport': 'not in the viewport'}</p>
        </h1>
        <div className='gap'></div>
          <img  ref={targetRef} src="./images/attraction.jpg" alt="simpsons" />  
       </>
    );
}
