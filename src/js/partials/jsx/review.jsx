import React from 'react';

class Review extends React.Component {
  render() {
    return (
      <div className="card card-review horizontal">
        <div className="card-image valign-wrapper">
          <img className="valign review-image circle" src={ this.props.img } alt={ this.props.alt }/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <h4>{ this.props.name } <span className="subheading">{ this.props.job }</span></h4>
            <p> { this.props.text }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
