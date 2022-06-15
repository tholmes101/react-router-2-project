import React from 'react'
import { Link } from "react-router-dom";

export default function Nav({currentUser}) {
    console.log(currentUser);
  return (
    <div className='Nav'>
        {currentUser.userName ? <p>Hello {currentUser.userName}</p> : <Link to='login'>Login</Link>}
        <img style={{height: "40px"}} src={currentUser.userName ? "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg": "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"}></img>
    </div>
  )
}

// if the current user has a name property, hello name
    // otherwise - 
