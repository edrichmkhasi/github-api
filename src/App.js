import React from 'react';
import User from './components/user.component';
import axios from 'axios';

import './App.css';


// https://api.github.com/users/edrichmkasi

// axios is a promise based js library

function App() {
  
  // state for storing the objects and values
  const state = {
    repos: null
  }

  const getUser = (e) => {
    
    //prevent the reloading after pressing the submit button
    e.preventDefault();       

    const user = e.target.elements.username.value;
    //console.log(user);
    // send a request using axios to the url
    axios.get(`https://api.github.com/users/${user}`)
    .then((res)=>{
      
      const repos = res.data.public_repos;
      //console.log(repos);

      // set the state to hold the value of the repos
      const setState = {repos};
      console.log(setState)
    })
  }

  return (
    <div className="App">
     
      <header className="App-header">
        <p>
          Github API (fetch profile) - axios
        </p>
      </header>

      <User getUser= {getUser}/>
      
      { state.repos ? <p>Number of Repos: { state.repos } </p> : <p>Please enter a username.</p> }
      
    </div>
    
  );
}

export default App;