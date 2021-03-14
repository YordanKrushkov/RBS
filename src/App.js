import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Body from './Page/HomePage'
import Login from './Page/Login'
import Register from './Page/Register'
import SubmitForm from './Page/SubmitForm'
import Header from './Components/Header'
import Properties from './Page/Properties';
import SingleCard from './Page/DetailsPage';
import Profile from './Page/Profile';
function App() {
  return (
    <div className="App">
    <Router> 
    <Header/>
    <Switch>
    <Route exact path="/" component={Body}/>
    <Route path="/login" component={Login}/>
    <Route path="/post" component={SubmitForm}/>
    <Route path="/register" component={Register}/>
    <Route path="/rent" component={Properties}/>
    <Route path="/sale" component={Properties}/>
    <Route path="/profile" component={Profile}/>
    <Route path="/:id" component={SingleCard}/>
    </Switch>
    </Router> 
    </div>
  );
}

export default App;
