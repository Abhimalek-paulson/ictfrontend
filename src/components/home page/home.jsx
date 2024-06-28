import './home.css'
import { Link } from 'react-router-dom';

function Nav()
    {
         return(
         <>
         <div className="navbar">
            <h1>Portfolio</h1>
            <h2>Home</h2>
            <h2>Contacts</h2>
            <Link to ="/login"><button>Log In</button></Link>
        </div>
        <div class="portfolio">
        <div>
           <h2>ABHIMALEK</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
           <p>Eligendi velit dolorum alias quis adipisci sunt consequuntur auto
              libero maiores id cupiditate, quidem 
              laboriosam illo aliquid, facere beatae?</p>
          
         </div>  
     </div>
     <table id="tbl">
         <thead>
             <tr>
                 <th>No </th>
                 <th>Description</th>
                 <th>Profit</th>
                 <th>Spend</th>
                 <th>Balance</th>
               </tr>
         </thead>
       <tbody>
         <tr>
         <td>01</td>
         <td>Laughing Bacchus Winecellars</td>
         <td>20000</td>
         <td>15000</td>
         <td>5000</td>
         </tr>
         <tr>
         <td>02</td>
         <td>Laughing Bacchus Winecellars</td>
         <td>20000</td>
         <td>15000</td>
         <td>5000</td>
         </tr>
 
          <tr>   
         <td>03</td>
         <td>Laughing Bacchus Winecellars</td>
         <td>20000</td>
         <td>15000</td>
         <td>5000</td>
          </tr>
 
          <tr>   
             <td>04</td>
             <td>Laughing Bacchus Winecellars</td>
             <td>20000</td>
             <td>15000</td>
             <td>5000</td>
          </tr>
          <tr>   
             <td>05</td>
             <td>Laughing Bacchus Winecellars</td>
             <td>20000</td>
             <td>15000</td>
             <td>5000</td>
          </tr>
            </tbody>
        </table>
         
         </>
         )
        
    }      
    

    export default Nav;