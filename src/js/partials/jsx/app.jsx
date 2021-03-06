import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './nav.jsx';
import Achievments from './achievments.jsx';
import ServiceBox from './serviceBox.jsx';
import OfferBox from './offerBox.jsx';
import SliderBox from './sliderBox.jsx';
import StatisticsBox from './statisticsBox.jsx';
import TeamBox from './teamBox.jsx';
import WorkGallery from './workGallery.jsx';

ReactDOM.render(<Nav />, document.getElementById('page-navigation'));
ReactDOM.render(<Achievments />, document.getElementById('achievments'));
ReactDOM.render(<ServiceBox />, document.getElementById('service-box'));
ReactDOM.render(<OfferBox />, document.getElementById('offer-box'));
ReactDOM.render(<SliderBox />, document.getElementById('slider-box'));
ReactDOM.render(<StatisticsBox />, document.getElementById('statistics-box'));
ReactDOM.render(<TeamBox />, document.getElementById('team-box'));
ReactDOM.render(<WorkGallery />, document.getElementById('work-gallery'));
