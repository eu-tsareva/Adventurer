import React from 'react';
import Statistics from './statistics.jsx';

class StatisticsBox extends React.Component {
  constructor() {
    super();
    this.state = {
      "data": [
        {
          "title": "10K+",
          "body": "Love Our Team",
          "img": "./img/heart.svg",
          "alt": "heart icon"
        }, {
          "title": "400+",
          "body": "Check Out",
          "img": "./img/check.svg",
          "alt": "check icon"
        }, {
          "title": "312",
          "body": "repeat client",
          "img": "./img/repeat.svg",
          "alt": "repeat icon"
        }, {
          "title": "480",
          "body": "Pizzas Ordered",
          "img": "./img/beer.svg",
          "alt": "beer icon"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.data.map((item, index) =>
          <div className="col m3" key={index}>
            <Statistics title={item.title} body={item.body} img={item.img} alt={item.alt} />
          </div>)}
      </div>
    );
  }
}

export default StatisticsBox;
