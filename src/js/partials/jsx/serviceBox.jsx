import React from 'react';
import Service from './service.jsx';

class ServiceBox extends React.Component {
  constructor() {
    super();
    this.state = {
      "data": [
        {
          "title": "Free support & updates",
          "body": `Lorem ipsum dolor sit amet, conse tetuer adipiscing elit,
                  sed diam nonu my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.`,
          "img": "./img/cog.svg",
          "alt": "cog icon"
        },
        {
          "title": "Fully customizable",
          "body": `Lorem ipsum dolor sit amet, conse tetuer adipiscing elit,
                  sed diam nonu my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.`,
          "img": "./img/pill.svg",
          "alt": "pill icon"
        },
        {
          "title": "12 themE websites",
          "body": `Lorem ipsum dolor sit amet, conse tetuer adipiscing elit,
                  sed diam nonu my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.`,
          "img": "./img/plug.svg",
          "alt": "plug icon"
        }
      ]
    };
  }


  render() {
    return (
      <div>
        {this.state.data.map((item, index) =>
            <Service title={ item.title } body={ item.body } img={ item.img } alt= { item.alt } key={ index }/>)}
      </div>
    );
  }
}

export default ServiceBox;
