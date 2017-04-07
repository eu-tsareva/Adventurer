import React from 'react';
import Team from './team.jsx';

class TeamBox extends React.Component {
  constructor() {
    super();
    this.state = {
      "data": [
        {
          "name": "Mahabubul Islam",
          "job": "HTML coder",
          "img": "./img/team1.jpg"
        },
        {
          "name": "Mahabubul Islam",
          "job": "HTML coder",
          "img": "./img/team2.jpg"
        },
        {
          "name": "Mahabubul Islam",
          "job": "HTML coder",
          "img": "./img/team3.jpg"
        },
        {
          "name": "Mahabubul Islam",
          "job": "HTML coder",
          "img": "./img/team4.jpg"
        }
      ],
      "socials": [
        {
          "name": "facebook",
          "ext": "svg",
          "link": "#"
        },
        {
          "name": "twitter",
          "ext": "svg",
          "link": "#"
        },
        {
          "name": "pinterest",
          "ext": "svg",
          "link": "#"
        },
        {
          "name": "dribbble",
          "ext": "svg",
          "link": "#"
        },
        {
          "name": "behance",
          "ext": "svg",
          "link": "#"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.data.map((item, index) =>
          <div className="col m3" key={ index }>
            <Team name={ item.name }
                  job={ item.job }
                  img={ item.img }
                  socials={ this.state.socials }
            />
          </div>)}
      </div>
    );
  }
}

export default TeamBox;
