import React from "react";
import Login from "./Login";

var isLoggedIn = false;
//Once the user goes through authentication 
//this gets switched to true

const currentTime = new Date().getHours();

// function renderConditionally(){

  // if (isLoggedIn === true)
  // {
  //   return <h1>Hello</h1>;

  // } else {
  //   return( 
  //           // <form className = "form" >
  //           //   <input type = "text" placeholder="Username" />
  //           //   <input type = "password" placeholder="Password" />
  //           //   <button type="submit">Login</button>
  //           // </form>
  //           //This "form" will be sent to Login.jsx while the overall function will be 
  //           //kept inside of {className="container"} to be made an inline code.
  //            But even then we have noticed that we have to use something called [Ternary Operator]
  //            since in JS function we shouldn't pass statements but rather expressions.
  //            Please refer to external resources for the difference between expressions and statements.
  //         <Login/> 

  //   );
//   }


// }

function App() {
  return <div className="container">
      { 
        /* [Ternary Operator] */
       isLoggedIn  ?  <h1>Hello</h1> : <Login/>  
        /* currentTime > 12 ? <h1> Why are you still working? </h1> : null */

        /*  AND Operator {&&} */
        /* currentTime < 12 && <h1>Why are you still working?</h1> */
        
      
      }</div>;
  }

export default App;
