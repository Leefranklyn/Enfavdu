/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';


const Timer = ({handleSubmit}) => {
  const [remainingTime, setRemainingTime] = useState(900);
  const jwt = localStorage.getItem("userJwt");
  const id = localStorage.getItem("userId");
  const [time, setTime] = useState(900)

  useEffect(()=> {
    setRemainingTime(time * 60)
  },[time])

  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json", // Add any other headers you need
      };

      const options = {
        credentials: "include",
        headers: headers,
      };

      try {
        const response = await fetch(
          `https://testmanagement2.onrender.com/api/user/test/${id}`,
          options
        );
        if (!response.ok) {
          throw new Error("Failed to fetch ID");
        }
        const data = await response.json();
        const test = await data.data.timer;
        setTime(test);

      } catch (error) {
        // Handle the error
      }
    };

    fetchData();
  }, [jwt, id]);

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
  }, [remainingTime, handleSubmit]);


  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  return(
    <div>
      <p className='text-xl font-bold'>
        Timer:{minutes}:{seconds < 10 ? '0' : ''}
            {seconds}
      </p>
  </div>
  ) 
}

export default Timer
