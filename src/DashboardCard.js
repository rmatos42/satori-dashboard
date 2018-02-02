import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import './DashboardList.css'

export default class DashboardCard extends Component {
  render() {
    return (
      <Card className="DashboardCard">
        <CardHeader>
          {this.props.header}
        </CardHeader>
        <CardText>
          {this.props.info}
        </CardText>
      </Card>
    );
  }
}