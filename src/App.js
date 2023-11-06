
import './App.css';
import ClassClock from './Components/ClassClock';
import LoginForm from './Components/LoginForm';
// import React, {useState} from 'react'
import FunctionalClock from './Components/FunctionalClock';
import FruitList from "./Components/FruitList";
import fun from './Components/fun';


function App() {
  // const [state, setState] = useState([])
  const array = [ 'apple','bnana','oriange','pine apple','mango','guava' ]
  // array = prompt( " Please enter name of fruits ")
  // console.log (array)
  return (
    <div>
      <fun/>
       <div>
     <LoginForm  />
     </div>
     <div>

     </div>
     <hr/>
     <div>
      <FunctionalClock />
     </div>
     <hr/>
     <hr/>
    <ul>
      {array.map(( item , index ) => {
        return <FruitList item = { item } key = { index }/>
      }
      )}
    </ul>
    <hr/>

    <div>
       <ClassClock />
     </div>
    </div>
  );
}

export default App;
