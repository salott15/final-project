import React, { Component } from 'react';
import './journals.css';

import JournalElement from './jelement';

export default class Journals extends Component {
  render() {
  	return(
  		<div>
  			<h1>TRAVELOGUE</h1>

			<div className="board">
				<h2>Sari's Journals</h2>
				<JournalElement />
				
			</div>

			<div className="bottom"></div>
		</div>
  		);
  	};
  }