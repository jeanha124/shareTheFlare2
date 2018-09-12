import React from 'react';
import { Link } from 'react-router-dom';

class Launch extends React.Component {

  render(){
    return (
      <div>
        <header>
          <h1>Share The Flare</h1>
          <input type="text" placeholder="Photos"/>
        <div>
          <Link to={`/login`}>Log In</Link>
          <Link to={`/signup`}>Sign Up</Link>
        </div>
        </header>
        <div>
          <h1>Find your inspiration.</h1>
          <br />
          <h2>Join the Share the Flare community, home to tens of billions</h2> 
          <h2>of photos and 2 million groups.</h2>

          <Link to={`/signup`}>Sign Up</Link>
        </div>
      </div>
    );
  }
}

export default Launch;

 