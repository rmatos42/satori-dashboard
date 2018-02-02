import React, { Component } from 'react';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './DashboardList.css'

export default class DashboardCard extends Component {
  render() {
    return (
      <Card className="DashboardCard">
        <CardHeader title={this.props.header} avatar="facebook.svg"/>
        <CardText>
          {this.props.info}
        </CardText>
        <CardActions>
          <FlatButton onClick={() => {
            console.log(this.props.index);
            this.props.deleteCard(this.props.index)
          }} label="Close Card"/>
        </CardActions>
      </Card>
    );
  }
}