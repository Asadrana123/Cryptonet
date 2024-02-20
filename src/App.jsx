import { useEffect, useState } from 'react'
import axios from 'axios';
import UserCard from './Card';
function App() {
  const [userDetails,setDetails]=useState();
  useEffect(()=>{
    async function fecthDetails(){
        const details=await axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc")
        setDetails(details.data.results[0]);
    }
    fecthDetails()
  },[])
  console.log(userDetails);
  return (
    <>
      {userDetails?<UserCard user={userDetails}/>:"Loading..."} 
    </>
  )
}

export default App
