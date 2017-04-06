import React from 'react';
import SearchForm from './searchForm.jsx';
// import InlineForm from './inlineForm.jsx';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      "current": location.href.split('/').pop(),
      "logo": "Adventurer",
      "mainNav": [
        {"name": "home", "link":""},
        {"name": "about", "link":"#about"},
        {"name": "service", "link":"#service"},
        {"name": "contact", "link":"#contact"},
        {"name": "faq", "link":"#faq"},
        {"name": "support", "link":"#support"}
      ]
    };
  }

  _isSelected(link) {
    if (this.state.current == link) {
      return "active";
    }
  }

  _select(link) {
    this.setState({"current": link});
  }

  render() {
    return (
      <nav className="transparent" role="navigation">
        <div className="nav-wrapper container">
          <a className="logo" id="top">{ this.state.logo }</a>
          <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            { this.state.mainNav.map((navItem, index) =>
              <li key={ index }>
                <a className={ this._isSelected(navItem.link) }
                  href={ navItem.link }
                  onClick={ this._select.bind(this, navItem.link) }>
                  { navItem.name }
                </a>
              </li>)
            }
            <li>
              <span className="show-form"><i className="material-icons">search</i></span>
              <SearchForm class="floating-form hidden-form" />
            </li>
          </ul>

          <ul id="nav-mobile" className="side-nav">
            { this.state.mainNav.map((navItem, index) =>
              <li key={index}>
                <a className={ this._isSelected(navItem.link) }
                  href={ navItem.link }
                  onClick={ this._select.bind(this, navItem.link)}>
                  { navItem.name }
                </a>
              </li>)
            }
            <li>
              <SearchForm />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
