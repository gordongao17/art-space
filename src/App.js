import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from 'react-bootstrap/Button';
import NavBarHeader from './components/NavBar';
import cobblestone from './images/cobblestone.jpg';

function App() {
  return (
    <div className="App">
      <NavBarHeader />
      <header>
        <div class="title">
          <h1>Welcome to ArtSpace! <i>(Name Pending)</i> <br /></h1>
          <p>
          A place to celebrate the beauty of city life! Share your pictures of your neighborhood and show 
          off your story in the city!</p>
        </div>
      </header>
      <body className="home-body">

      </body>
    </div>
  );
}

export default App;
