import logo from './logo.svg';
import './App.css';
import  SignUp from './Pages/Signup_Form'
import Landing from './Pages/Landing';
import GetEmails from './Pages/GetEmails';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
   <Route path='/' exact component={SignUp}/>
   <Route path='/Landing' component={Landing}/>
  <Route path='/GetEmails' component={GetEmails}/>
  </Router>
  );
}

export default App;
