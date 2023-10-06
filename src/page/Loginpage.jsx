import React, { useState } from 'react'

function Loginpage() {
  const [username,setUsername] = useState("");
  const[ password, setPassword] = useState("");
  const[valid,setValid]= useState(false);
  console.log(username+password)
  const handleSubmit = ()=>{
    if (username==="abc"&& password==="123"){
      setValid(true);
    }

  }
  

  return (
    {

    <div>
      <form>
        <label htmlFor='username'>username</label>
        <input className=' border-4' type="text" name='username' onChange={(e)=>setUsername(e.target.value)}/>

        <label>password</label>
        <input className='border-4' type="text" onChange={(e)=>setPassword(e.target.value)}/>

        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
    }
  )
}

export default Loginpage