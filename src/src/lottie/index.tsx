

import React, { useState } from 'react'
import Lottie from 'react-lottie';
import animationData from './key-locker.json'
 

const Locked = () => {

    const [state, setState] = useState({isStopped: false, isPaused: false})


    const buttonStyle = {
        display: 'block',
        margin: '10px auto'
      };
   
      const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };


    return (
        <div>
             <Lottie options={defaultOptions}
              height={100}
              width={100}
              isStopped={state.isStopped}
              isPaused={state.isPaused}/>
        </div> 
    )
}



export default Locked

export { Locked }

