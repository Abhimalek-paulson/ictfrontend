import { useState } from "react";
//import { Link } from "react-router-dom";
function Signup()
{
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [repassword,setRepassword] = useState("");
    const [signup,setSignup] = useState("");
    const [error,setError] = useState(false);
        function handleUsername(e)
        {
            setUsername(e.target.value);
        }
        function handleEmail(e)
        {
            setEmail(e.target.value);
        }
        function handlePassword(e)
        {
            setPassword(e.target.value);
        }
        function handleRepassword(e)
        {
            setRepassword(e.target.value);
        }
        function handleSignup()
        {
       
            if(password===repassword){
                setSignup({
                    username,email,password,repassword
                })
                setError(false)
            }
            else{
                setError(true)
            }
        }

        

        
             
         return(

             <div style={{display:'flex',flexDirection:'column',justifySelf:'center',                        marginLeft:'500px',         marginRight:'500px',gap:'10px',borderWidth:'2px',borderColor:'black'}}>
                <label for="username">Username</label>
                    <input type="text" onChange={handleUsername} required/>
            
                    <label for="email">Email</label>
                    <input type="email" onChange={handleEmail} required/>
            
                    <label for="password">Password</label>
                    <input type="password" onChange={handlePassword} required/>

                    <label for="password">Re-Password</label>
                    <input type="password" onChange={handleRepassword} required/>
            
                    {error ===true ?<p>Add all fields</p>:""}
                    <button onClick={handleSignup}>Sign Up</button>
                    <p style={{fontstyle:"oblique"}}>{signup.username} <br/>{signup.email} <br/>{signup.password}<br/> {signup.repassword}</p>
            </div>
            
                
                
                
            
            
            
         )
        }    

    export default Signup;