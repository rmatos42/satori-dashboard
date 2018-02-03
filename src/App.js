import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DashboardList from './DashboardList';
import TitleBar from './TitleBar';
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
      card_types: [
        {
          name: 'Facebook',
          render: null,
        },
        {
          name: 'LinkedIn',
          render: null,
        },
        {
          name: '23andme',
          render: null,
        }
      ]
    }
    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  addCard(header, info) {
    var cards = this.state.cards;
    cards.push({
      header: header,
      info: info
    });
    this.setState({cards});
  }

  deleteCard(i) {
    var cards = this.state.cards;
    console.log(i);
    cards.splice(i, 1);
    this.setState({cards});
  }

  render() {
    return (
      <MuiThemeProvider>
        <TitleBar card_types={this.state.card_types} addCard={this.addCard} />
        <DashboardList cards={this.state.cards} deleteCard={this.deleteCard}/>
      </MuiThemeProvider>
    );
  }
}

export default App;
