import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const nav = useNavigate();

  axios.defaults.withCredentials = true
  useEffect(() => {
    axios.get("http://localhost:8000/verify/auth").then((res) => {
      if (res.data.status) {
        console.log("token is alive");
      } else {
        nav("/");
      }
    });
  });
  
  function handleLogout(){
    axios.get('http://localhost:8000/auth/logout')
    .then(res =>{
      if(res.data.status){
        nav('/')
      }
    })
  }

  return (
    <div>
      home
      <button onClick={handleLogout} >Logout</button>
    </div>
  );
}

export default Home;
