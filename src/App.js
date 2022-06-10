import { useState } from "react";
import React from "react";
import data from "./data.js";
import "./app.css";
function App() {
  const [state, setState] = useState(data);

  if(state.length==0){
    return <h1 className="heading">No birthdays</h1>;
  }
  else{
    return (
      <React.Fragment>
      <div className="container">
      <h1>{state.length} Birthdays Today</h1>
        {state.map((item) => {
          return (
            <div key={item._id} className="box">
              <p>{item.title}</p>
              <p>{item.dailyRentalRate} years</p>
            </div>
          );
        })}
        <button className="button" onClick={()=>setState([])} > Clear All </button>
      </div>
    </React.Fragment>
  );

  }
  
 
}

export default App;
