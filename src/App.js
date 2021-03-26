import './App.scss';
import {useContext} from 'react';
import {ActionContext} from './Context/actionContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Body from './Page/HomePage'
import Login from './Page/Login'
import Register from './Page/Register'
import SubmitForm from './Page/SubmitForm'
import Header from './Components/Header'
import Notify from './Components//Notification'
import Properties from './Page/Properties';
import SingleCard from './Page/DetailsPage';
import Profile from './Page/Profile';
import ErrorPage from './Page/404';
import Footer from './Components/Footer';
function App() {

  const {action} = useContext(ActionContext)


  return (
    <div className="App">
    <Router> 
    <Header/>
    {action&&<Notify/>}
    <Switch>
    <Route exact path="/" component={Body}/>
    <Route path="/login" component={Login}/>
    <Route path="/post" component={SubmitForm}/>
    <Route path="/register" component={Register}/>
    <Route path="/rent" component={Properties}/>
    <Route path="/sale" component={Properties}/>
    <Route path="/search" component={Properties}/>
    <Route path="/profile" component={Profile}/>
    <Route path='/properties' component={ Properties } />
    <Route path="/property/:id" component={SingleCard}/>
    <Route path="/:err" component={ErrorPage}/>
    </Switch>
    <Footer/>
    </Router> 
    </div>
  );
}

export default App;
