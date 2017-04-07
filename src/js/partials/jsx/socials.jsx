import React from 'react';

class Socials extends React.Component {

  render() {
    let data = this.props.data;
    return (
      <ul className="social-list inline-list">{
        data.map((item, index) =>
            <li key={ index }>
              <a className="social-icon text-hide" href={ item.link }>
                <img className={ this._getClass(item.ext) } src={ this._getSrc(item.name, item.ext) } alt={ this._getAlt(item.name) }/>
                { item.name }
              </a>
            </li>)
      }</ul>
    );
  }

  _getClass(ext) {
    return ext == "svg" ? "svg" : "";
  }

  _getAlt(name) {
    return name + " icon";
  }

  _getSrc(name, ext) {
    return "./img/" + name + "." + ext;
  }
}

export default Socials;
