import React from 'react';
import Socials from './socials.jsx';

class Team extends React.Component {
  render() {
    return (
      <div className="team-item">
        <div className="card card-team">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={ this.props.img } alt={ this._getAlt() }/>
          </div>
          <div className="card-reveal center">
            <div className="card-reveal-title">{ this.props.name }</div>
            <p>{ this.props.job }</p>
            <Socials data={ this.props.socials } />
          </div>
        </div>
      </div>
    );
  }

  _getAlt() {
    return this.props.name + " avatar";
  }
}

export default Team;
