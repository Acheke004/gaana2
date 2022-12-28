import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Discover from './component/Discover'
import Profile from './component/Profile'
import Home from './component/Home'
import Navbar from './component/Navbar';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Mymusic from './component/Mymusic';
import Radio from './component/Radio';
import Signup from './component/Signup';
import Signin from './component/Signin';
import Song from './song/Song';

function App() {
  return (
    
    <div className="App">
      
      <h1>my application</h1>
      
      <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
        <Route path="/myhome" component={Home}></Route>
        <Route path="/myprofile" component={Profile}></Route>
        <Route path="/mydiscover" component={Discover}></Route>
        <Route path="/mymymusic" component={Mymusic}></Route>
        <Route path="/myradio" component={Radio}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/signin" component={Signin}></Route>
        <Route path="/song" component={Song}></Route>
      </Switch>
      </BrowserRouter>
      

                               


    </div>
  );
}

export default App;
