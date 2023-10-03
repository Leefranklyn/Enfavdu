import React, { useContext, useEffect, useState } from 'react'
import LoginContext from '../../../context/LoginContext'
import UserLoginContext from '../../../context/UserLoginContext';
import Header from './Header';

const Edit = () => {
  const { userId } = useContext(LoginContext);
  const { id } = useContext(UserLoginContext);

  const jwt = localStorage.getItem('jwt');

  const checkTokenExpiration = async () => {
    const jwt = localStorage.getItem("jwt");
    const expirationTime = localStorage.getItem("expirationTime");
  
    if (jwt && expirationTime) {
      const currentTime = new Date().getTime();
      if (currentTime > parseInt(expirationTime)) {
        // Token has expired, navigate the user to the login page
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    checkTokenExpiration();
  }, []); 


  useEffect(() => {
  
    async function fetchData() {
      const headers = {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type': 'application/json' // Add any other headers you need
      };
  
      const options = {
        headers: headers
      };
  
      try {
        const response = await fetch(`https://testmanagement.onrender.com/api/admin/institution/test/${userId}`, options);
        if (!response.ok) {
          throw new Error("Failed to fetch TEST");
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        // Handle the error
      }
    }
  
    fetchData();
  }, []);
  

  return (
    <div>
      <Header/>
    </div>
  )
}

export default Edit
