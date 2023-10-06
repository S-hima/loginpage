import React from 'react'

function Login() {
  return ( 
    <div class="login-container">  
    <form>

    <div class="form-group"> 
        <label For="username">Username</label> 
        <input type="text" id="username" name="username"/> 
    </div> 
    <h1 className=" text-red-700">
      just a check
    </h1>
    <div class="form-group"> 
        <label For="password">Password</label> 
        <input type="password" id="password" name="password"/> 
    </div> 
    <button type="submit">Submit</button> 
    </form>
      </div>
  )
}

export default Login 