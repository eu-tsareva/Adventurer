import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './nav.jsx';
import Achievments from './achievments.jsx';
import ServiceBox from './serviceBox.jsx';
import OfferBox from './offerBox.jsx';

ReactDOM.render(<Nav />, document.getElementById('page-navigation'));
ReactDOM.render(<Achievments />, document.getElementById('achievments'));
ReactDOM.render(<ServiceBox />, document.getElementById('service-box'));
ReactDOM.render(<OfferBox />, document.getElementById('offer-box'));
