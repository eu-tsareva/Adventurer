import React from 'react';
import Work from './work.jsx';

class WorkGallery extends React.Component {
  constructor() {
    super();

    this.state = {
      "types": ["all", "photography", "graphic", "print", "web"],

      "currentType": "all",

      "data": [
        {
          "title": "Our work image 01",
          "text": "Lorem ipsum dolor sit amet, consectetur",
          "img": "img/work1.jpg",
          "link": "#",
          "type": ["all", "photography", "print"]
        },
        {
          "title": "Our work image 02",
          "text": "Lorem ipsum dolor sit amet, consectetur",
          "img": "img/work2.jpg",
          "link": "#",
          "type": ["all", "web"]
        },
        {
          "title": "Our work image 03",
          "text": "Lorem ipsum dolor sit amet, consectetur",
          "img": "img/work3.jpg",
          "link": "#",
          "type": ["all", "graphic", "print"]
        },
        {
          "title": "Our work image 04",
          "text": "Lorem ipsum dolor sit amet, consectetur",
          "img": "img/work4.jpg",
          "link": "#",
          "type": ["all", "graphic"]
        },
        {
          "title": "Our work image 05",
          "text": "Lorem ipsum dolor sit amet, consectetur",
          "img": "img/work5.jpg",
          "link": "#",
          "type": ["all", "graphic", "print"]
        },
        {
          "title": "Our work image 06",
          "text": "Lorem ipsum dolor sit amet, consectetur",
          "img": "img/work6.jpg",
          "link": "#",
          "type": ["all", "photography", "print"]
        },
      ]
    };
  }


  render() {
    return (
      <div className="gallery center">
        <ul className="gallery-filter inline-list">
          {this.state.types.map((item, index) =>
            <li key={ index }>
              <a className={ this._isSelected(item) }
                 onClick={ this._selectFilter.bind(this, item) }>
                { item }
              </a>
            </li>)
          }
        </ul>
        <div className="gallery-inner">
          { this._generateGallery() }
        </div>
        <div className="gallery-controls">
          <a href="#" className="gallery-control gallery-control-prev disabled circle text-hide">
            <img className="svg" src="./img/arrow-left.svg" />
            previous
          </a>
          <a href="#" className="gallery-control gallery-control-next circle text-hide">
            <img className="svg" src="./img/arrow-left.svg" />
            next
          </a>
        </div>
      </div>
    );
  }

  _selectFilter(item) {
    this.setState({"currentType": item});
  }

  _isSelected(item) {
    return (this.state.currentType === item) ? "active" : "";
  }

  _generateGallery() {
    const filter = this.state.currentType;

    return (
      <div className="row container">
        {this.state.data
            .filter(item => item.type.includes(filter))
            .map((item, index) =>
              <div className="col m4" key={ index }>
                <Work title={ item.title } text={ item.text } img={ item.img } link={ item.link } />
              </div>
            )}
      </div>
    );
  }
}

export default WorkGallery;
