import './App.css';
import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <NavBar />
        <Search />
      </div>
    </MuiThemeProvider>

  );
}

export default App;
