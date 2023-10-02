import React, { useState, useEffect, useContext } from 'react';


const Timer = ({handleSubmit}) => {
  const [remainingTime, setRemainingTime] = useState(900);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => {
        if (prevRemainingTime === 0) {
          clearInterval(interval); // Stop the countdown when remainingTime reaches 0
          return 0;
        }
        return prevRemainingTime - 1;
      });
    }, 1000);
    if (remainingTime === 0) {
       handleSubmit();
      // Call your function here when the timer reaches 0:00
      
    }

    return () => {
      clearInterval(interval);
    };
  }, [remainingTime]);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  return(
    <div>
      <p className='text-2xl font-bold'>
        Timer:{minutes}:{seconds < 10 ? '0' : ''}
            {seconds}
      </p>
  </div>
  ) 
}

export default Timer
