import './App.css';
import { useState } from "react";
import { Users } from  "./users";


function App() {

  const [query, setQuery] = useState("");

  console.log(query);

  return (
    <div className="App">
      
      <input 
       type="text"  
       placeholder="Search..." 
       className="search" 
       onChange={(e) => setQuery(e.target.value)}
       />

       <ul className="list">
        {Users.map((user) => (
        <li key={user.id} className="listItems">
          {user.first_name}
          </li>
        
        ))}


       </ul>


    </div>
  );
}

export default App;
