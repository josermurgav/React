
//import React from "react"
import {useState,useReducer} from "react";
import './App.css';
import chef from "./images/chef.jpg"


// let language="React";
// let moon="😋";
const items =["Macaroni and Cheese",
              "Salmon with Potates",
              "Tofu with Vegetables",
              "Minestrone Soup"
            ];

const dishObjects =items.map((dish,i)=>({
  id:i,
  title: dish
}));
//console.log(dishObjects);
// eslint-disable-next-line react/prop-types
function Header({ name, year})
{
  //console.log(name);
  return(
    <header>
      <h1>{name}&apos;s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}
// eslint-disable-next-line react/prop-types
function Main({dishes, openStatus, onStatus}){
  return(
  <>
    <div>
      {/* <button onClick={()=>onStatus(!openStatus)}>I want to be {!openStatus?"open":"closed"}</button> */}
      <button onClick={onStatus}>I want to be {!openStatus?"open":"closed"}</button>
      <h2>Welcome!{openStatus?"Open":"Closed"}</h2>
    </div>
    <img 
      src={chef} 
      height={200} 
      alt="Photo of chef owner"
    />
    <ul>
      {
        // eslint-disable-next-line react/prop-types
        dishes.map((dish)=>(<li key={dish.id} style={{listStyleType:"none"}}>
                              {dish.title}
                            </li>
                            ))
      }
    </ul>
  </>
  );
}

function App() {
  
  //const [status, setStatus]=useState(true);  
  const [status, toggle]=useReducer((status)=> !status , true );  
  return(
    <div>
      <h1>The restaurant is currently {status? "open":"closed"}.</h1>
      {/* <button onClick={()=>setStatus(!status)}>{!status? "Open":"Close"} Restaurant</button>       */}
      <button onClick={toggle}>{!status? "Open":"Close"} Restaurant</button>
      <Header name="Alex" year={new Date().getFullYear()}/>
      {/* <Main dishes ={dishObjects} openStatus ={status} onStatus={setStatus}/>     */}
      <Main dishes ={dishObjects} openStatus ={status} onStatus={toggle}/>    
    </div>    
  );
}

export default App;
