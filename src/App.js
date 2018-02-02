import React, { Component } from 'react';
import logo from './logo.svg';
// import Card from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DashboardList from './DashboardList';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          header: 'Facebook',
          info: 'asdfjlsadjf asdfk asjdlf asdflas jflskadfkljfakjlf askdjf asldkfjasldfjaldfjja aksdjfkalfjd',
        },
        {
          header: 'Facebook',
          info: 'asdfjlsadjf asdfk asjdlf asdflas jflskadfkljfakjlf askdjf asldkfjasldfjaldfjja aksdjfkalfjd',
        },
        {
          header: 'Facebook',
          info: 'asdfjlsadjf asdfk asjdlf asdflas jflskadfkljfakjlf askdjf asldkfjasldfjaldfjja aksdjfkalfjd',
        },
        {
          header: 'Facebook',
          info: 'asdfjlsadjf asdfk asjdlf asdflas jflskadfkljfakjlf askdjf asldkfjasldfjaldfjja aksdjfkalfjd',
        }
      ],
    }
  }
  render() {
    return (
      <MuiThemeProvider>
        <DashboardList cards={this.state.cards} />
      </MuiThemeProvider>
    );
  }
}

export default App;
