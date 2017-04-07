import React from 'react';

class Statistics extends React.Component {
  render() {
    return (
      <div className="col m3">
        <div className="statistics-item center">
          <img className="svg" src={ this.props.img } alt={ this.props.alt } />
          <h3 className="section-title">{ this.props.title }</h3>
          <p>{ this.props.body }</p>
        </div>
      </div>
    );
  }
}

export default Statistics;
