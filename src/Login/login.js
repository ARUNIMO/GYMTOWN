import React from 'react';
import './login.css'
//import './App.css'
function Login(){
  return (
   
      <body className='img'>
      <h1>
           <span class="log">LOG&nbsp;</span><span class="in">IN</span>
        </h1>
        <form>
            <label class="email" for="em">Email&nbsp;&nbsp;:</label>
            <input class="inputemail" type="text" id="em"/>
            <label class="password" for="pass">Password&nbsp;&nbsp;:</label>
            <input class="inputpass" id="pass" type="password"/>
            <label class="clk" for="clk">Click&nbsp;to&nbsp;argee&nbsp;terms&nbsp;and&nbsp;conditions</label>
            <input class="ckbox" type="checkbox" id="clk" name="clk"/>
            <input class="sub" type="submit" />
        </form>
        <div class="cir1"></div>
    <div class="cir2"></div>
    <div class="cir3"></div>
    <div class="cir4"></div>
    <div class="cir5"></div>
    <div class="cir6"></div>
    <div class="cir7"></div>
    <div class="cir8"></div>
    <div class="cir9"></div>
    <div class="cir10"></div>
      </body>
    
  )
}
export default Login;
