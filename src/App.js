
import './App.css';

import Todo from './Todo'
import react,{Component} from 'react';


// class App extends Component{
//   render(){
//   return (
//     <div className="App">
//       <h2>this is from app.js</h2>
//       <Todo/>
//     </div>
//   );
// }
// }
function App(){
 
  var item="Hello";
  return(
    <>
    {/* <h1>Hello this is from Function app</h1> */}
    <Todo/>
    <div></div>
    </>
  )
  
}

export default App;
