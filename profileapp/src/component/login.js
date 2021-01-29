import React from 'react'
import '../App.css'
 
 

function login(){
    return(
        <div  className = 'login-b'>
         
         <div className = "title">Sign In</div>
           <form className = 'login'>
              <div class="form-group ">
               
              <input type="email" className="form-control  col-sm-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
               </div>

               <div class="form-group  ">
                <label for="inputPassword2" class="sr-only">Password</label>
                <input type="password" class="form-control col-sm-4" id="inputPassword2" placeholder="Password"></input>
                 </div>

                  
               
           </form> 
           <button block size="lg" class="btn btn-primary " type="submit"  >
                     Login
                  </button>
        </div>
        
        
        
    );
    }
export default login;