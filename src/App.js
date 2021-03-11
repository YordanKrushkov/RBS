import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Body from './Page/HomePage'
import Login from './Page/Login'
import Register from './Page/Register'
import Header from './Components/Header'
function App() {
  return (
    <div className="App">
    <Router> 
    <Header/>
    <Route exact path="/" component={Body}/>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    </Router> 
    </div>
  );
}

export default App;
