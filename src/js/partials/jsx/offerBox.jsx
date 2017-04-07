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
          "img": "./img/cloud.svg",
          "alt": "cloud icon"
        }, {
          "title": "general conract",
          "body": `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
          "img": "./img/shop.svg",
          "alt": "shop icon"
        }, {
          "title": "consultation",
          "body": `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
          "img": "./img/graph.svg",
          "alt": "graph icon"
        }, {
          "title": "24/7 full suport",
          "body": `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
          "img": "./img/basket.svg",
          "alt": "basket icon"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.data.map((item, index) =>
          <Offer title={item.title} body={item.body} img={item.img} alt={item.alt} key={index}/>)}
      </div>
    );
  }
}

export default OfferBox;
