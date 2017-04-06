import React from 'react';

class Service extends React.Component {
  render() {
    return (
      <div className="col s12 m4">
        <div className="service-item">
          <img className="service-icon svg" src={ this.props.img } alt={ this.props.alt } />
          <h4>{ this.props.title }</h4>
          <p>{ this.props.body }</p>
          <a className="btn service-btn">see more</a>
        </div>
      </div>
    )
  }
}

export default Service;
