
import './App.css';
import welcome from './welcome';
import Login from './Login';
import {Link,Route,Switch,Router}  from 'react-router-dom'
import Register from './Register';

function App(props) {
  return  (
    
    <div >
      <div class="container1" >
      <div class="row align-items-start">
      <div  className="col left_column">     
    
    </div>

    <div className="col right_column">
     <div className="form_container">
      
     
     {props.children}
    
     </div>
      
    </div>
    
  </div>
  </div>
      
    </div>
    
  )
}

export default App;
