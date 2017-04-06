import React from 'react';

class InlineForm extends React.Component {
  render() {
    return (
      <form className={ "inline-form " + this.props.class } action={ this.props.action } method={ this.props.method }>
        <div className="input-field">
          <input type={ this.props.type } />
        </div>
        <button className={"btn " + this.props.type + "-btn"}><i className="material-icons">{ this.props.type }</i></button>
      </form>
    );
  }
}

export default InlineForm;
