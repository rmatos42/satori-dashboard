import React, { Component } from 'react';
import DashboardCard from './DashboardCard';
import './DashboardList.css'

export default class DashboardList extends Component {

  constructor(props) {
    super(props);
    console.log(props.cards);
    this.state = {
      cards: props.cards
    }
  }

  render() {
    return (
      <div className="DashboardList">
        {this.state.cards.map((card_item) =>
          <DashboardCard header={card_item.header} info={card_item.info} />
        )}
      </div>
    );
  }
}