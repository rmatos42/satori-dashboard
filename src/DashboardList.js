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
        {this.props.cards.map((card_item, index) =>
          <DashboardCard 
            deleteCard={this.props.deleteCard}
            header={card_item.header}
            info={card_item.info}
            index={index}/>
        )}
      </div>
    );
  }
}