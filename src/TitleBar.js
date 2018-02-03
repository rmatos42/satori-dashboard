import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Dialog from 'material-ui/Dialog';

export default class TitleBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open_drawer: false,
      open_dialog: false
    }

    this.addCard = this.addCard.bind(this);
  }

  addCard(name) {
    this.props.addCard(name, 'asdfasldfjasdjf akjdfklajskdjf jalskdfasdjfaskljf askdjfalksjf');
    this.setState({open_dialog: false})
  }

  render() {
    return (
      <div>
        <Drawer
          open={this.state.open_drawer}
        />
        <Dialog
          title="Pick a card to add"
          open={this.state.open_dialog}>
          <List>
            {this.props.card_types.map((card_type) =>
              <ListItem
                onClick={() => this.addCard(card_type.name)}
                primaryText={card_type.name}/>
            )}
          </List>
        </Dialog>
        <AppBar
          onLeftIconButtonClick={() => this.setState({open_drawer: !this.state.open_drawer})} 
          title="My Satori Dashboard"
          iconElementRight={
            <FlatButton
              onClick={() => {this.setState({open_dialog: !this.state.open_dialog})}}
              label="Add Card"/>
          }>
        </AppBar>
      </div>
    );
  }
}