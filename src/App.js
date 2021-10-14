import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from './pages/home';
import ProfilePage from './pages/profile';
// import {withRouter  } from 'react-dom'


function App() {
  return (
    <Router>

    <div className="App">
      <Navbar/>
      

        <Switch>
          <Route exact path="/" component={ProfilePage}/>
          <Route path="/home" component={HomePage}/>
        </Switch>



    </div>
    </Router>

  );
}

export default App
