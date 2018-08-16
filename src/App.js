import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import './App.css';
import Feeds from './components/Feeds/Feeds';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';

class App extends Component {
  
  render() {
    return (
      <Layout>
         <Header />
           <Home />
           <Feeds  clicked={this.showHandler}/>
        <Footer />
      </Layout>
    );
  }
}

export default App;
