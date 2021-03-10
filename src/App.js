import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Body from './Page/HomePage'
import Header from './Components/Header'
function App() {
  return (
    <div className="App">
    <Router> 
    <Header/>
    <Route exact path="/" component={Body}/>
    </Router> 
    </div>
  );
}

export default App;
