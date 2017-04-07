import React from 'react';
import Review from './review.jsx';

class SliderBox extends React.Component {
  constructor() {
    super();

    this.numOnSlide = 2;

    this.state = {
      "data": [
        {
          "name": "Ejazul islam",
          "job": "Diploma In mati bidda",
          "text": ` “ Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s” `,
          "img": "./img/review1.jpg",
          "id": "0"
        },
        {
          "name": "Iqball Hossain",
          "job": "Psd at koitor bidda",
          "text": ` “ Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s” `,
          "img": "./img/review2.jpg",
          "id": "1"
        },
        {
          "name": "Iqball Hossain",
          "job": "Psd at koitor bidda",
          "text": ` “ Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s” `,
          "img": "./img/review2.jpg",
          "id": "2"
        },
        {
          "name": "Ejazul islam",
          "job": "Diploma In mati bidda",
          "text": ` “ Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s” `,
          "img": "./img/review1.jpg",
          "id": "3"
        },
        {
          "name": "Ejazul islam",
          "job": "Diploma In mati bidda",
          "text": ` “ Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s” `,
          "img": "./img/review1.jpg",
          "id": "4"
        },
        {
          "name": "Iqball Hossain",
          "job": "Psd at koitor bidda",
          "text": ` “ Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s” `,
          "img": "./img/review2.jpg",
          "id": "5"
        }
      ]
    };
  }


  render() {
    return (
      <ul className="slides">
        {this._generateSlides.call(this)}
      </ul>
    );
  }

  _generateSlides() {
    var self = this;
    return this.state.data
      .reduce(function(result, item, index) {
        if ((index % self.numOnSlide) === 0) {
          return [...result, index];
        } else {
          return result;
        }
      }, [])
      .map(item => self.state.data.slice(item, item + self.numOnSlide))
      .map((item,index) => self._genSlide(item, index));
  }

  _genSlide(slide, index) {
    return (
      <li key={ index }>
        {slide.map(item =>
          <Review name={ item.name } job={ item.job } text={ item.text } img={ item.img } alt={ item.alt } key={ item.id }/>
        )}
      </li>
    );
  }
}

export default SliderBox;
