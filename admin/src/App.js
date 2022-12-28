import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Artist from './pages/Artist';
import Album from './pages/Album';
import User from './pages/User';
import Navbar from './component/Navbar';

import Pa from './pages/Pa';
import Addartist from './pages/Addartist';
import Addalbum from './pages/Addalbum';
import Addsong from './pages/Addsong';

function App() {
  return (
    
    <div className="App">
      
      <h1>my application</h1>
      
      <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
      <Route path="/p" component={Pa}></Route>
      <Route path="/artist" component={Artist}></Route>
        <Route path="/album" component={Album}></Route>
        <Route path="/myuser" component={User}></Route>
        <Route path="/addartist" component={Addartist}></Route>
        <Route path="/addalbum" component={Addalbum}></Route>
        <Route path="/addsong" component={Addsong}></Route>
        
      </Switch>
      </BrowserRouter>
      

                               


    </div>
  );
}

export default App;
