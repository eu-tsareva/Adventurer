import React from 'react';
import Offer from './offer.jsx';

class OfferBox extends React.Component {
  constructor() {
    super();
    this.state = {
      "data": [
        {
          "title": "technical analysis",
          "body": `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
          "img": "./img/cloud.svg"
        }, {
          "title": "general conract",
          "body": `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
          "img": "./img/shop.svg"
        }, {
          "title": "consultation",
          "body": `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
          "img": "./img/graph.svg"
        }, {
          "title": "24/7 full suport",
          "body": `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
          "img": "./img/basket.svg"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.data.map((item, index) =>
          <div className="col m6 s12"  key={index}>
            <Offer title={item.title} body={item.body} img={item.img} />
          </div>)}
      </div>
    );
  }
}

export default OfferBox;
