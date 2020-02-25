import React from 'react';
import './app.scss';

import Header from './components/header.js'
import Footer from './components/footer.js'
import Main from './components/counter.js'

// dummy component - it is also a functional component

// also a dummy component and functional component

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
