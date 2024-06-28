import { Link } from "react-router-dom";
function Login()
    {
        
        

        
             
         return(

             <div style={{display:'flex',flexDirection:'column',justifySelf:'center',marginLeft:'500px',         marginRight:'500px',gap:'10px',borderWidth:'2px',borderColor:'black'}}>
                <label for="username">Username</label>
                    <input type="text"  required/>
                <label for="password">Password</label>
                    <input type="password" required/>

            
                    <button style={{backgroundColor :'green'}} type="submit">Log In</button>
                   <Link to = "/register"><button style={{backgroundColor :'green',width:'auto'}} type="submit">Sign Up</button></Link> 
            
                
                
                
            </div>
            
         )
        }    

    export default Login;