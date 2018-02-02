import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import FlatButton from 'material-ui/FlatButton';

export default class TitleBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open_drawer: false
    }
  }

  render() {
    return (
      <div>
        <Drawer
          open={this.state.open_drawer}
        />
        <AppBar
          onLeftIconButtonClick={() => this.setState({open_drawer: !this.state.open_drawer})} 
          title="My Satori Dashboard"
          iconElementRight={
            <FlatButton
              onClick={() => this.props.addCard()}
              label="Add Card"/>
          }>
        </AppBar>
      </div>
    );
  }
}