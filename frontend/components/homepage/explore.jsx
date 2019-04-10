import React from 'react';
import Footer from '../main_tools/footer';
import MainNav from '../main_tools/main_nav_container';


class Explore extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MainNav />
        <nav className="sub-nav">
          <h1 className="explore1 active">Explore</h1>
        </nav>
        <div className="body-background" style={{color: '#212124', backgroundColor: "#f2f5f6"}}>
        <div className="photo-div">
          {/* <ul className="photo-index">{photos}</ul> */}
        </div>
      </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Explore;