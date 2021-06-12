import React, { useEffect } from 'react';
import './App.css';
import {useDispatch ,useSelector} from 'react-redux';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './Widgets';


function App() {

  return (
    <div className="app">
  <Header/>
 <div class="app__body">
 <Sidebar/>
 <Feed/>
 <Widgets/>
 </div>

  
  </div>
  );
}

export default App;
