import React from 'react';

class Work extends React.Component {
  render() {
    return (
      <div className="card card-work">
        <div className="card-image">
          <img src={ this.props.img } alt="our work image" />
          <div className="card-controls">
            <a className="card-control card-control-zoom text-hide circle" href="#">zoom</a>
            <a className="card-control card-control-link text-hide circle" href={ this.props.link }>link</a>
          </div>
        </div>
        <div className="card-content">
          <div className="cart-title">{ this.props.title }</div>
          <p>{ this.props.text }</p>
        </div>
      </div>
    );
  }

}

export default Work;
