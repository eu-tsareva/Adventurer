import React from 'react';

class Offer extends React.Component {
  render() {
    return (
      <div className="col m6 s12">
        <div className="card card-offer horizontal">
          <div className="card-image valign-wrapper">
            <img className="svg valign" src={ this.props.img } alt={ this.props.alt } />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <h4>{ this.props.title }</h4>
              <p>{ this.props.body }</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Offer;
