import React, { Component } from 'react';
import {connect} from 'react-redux';
import './newplace.css';
import {addPlace} from './redux/places/placeactions';

class NewPlace extends Component {
  render() {
  	return(
  		<div>
  			<h1>TRAVELOGUE</h1>

			<div className="newplace">
				<h2>Create a new place entry!</h2>
				<div>

					<label>State</label>
					<select name="state" id="state">
					  <option value="Alabama">Alabama</option>
					  <option value="Alaska">Alaska</option>
					  <option value="Arizona">Arizona</option>
					  <option value="Arkansas">Arkansas</option>
					  <option value="California">California</option>
					  <option value="Colorado">Colorado</option>
					  <option value="Connecticut">Connecticut</option>
					  <option value="Deleware">Deleware</option>
					  <option value="Florida">Florida</option>
					  <option value="Georgia">Georgia</option>
					  <option value="Hawaii">Hawaii</option>
					  <option value="Idaho">Idaho</option>
					  <option value="Illinois">Illinois</option>
					  <option value="Indiana">Indiana</option>
					  <option value="Iowa">Iowa</option>
					  <option value="Kansas">Kansas</option>
					  <option value="Kentucky">Kentucky</option>
					  <option value="Louisiana">Louisiana</option>
					  <option value="Maine">Maine</option>
					  <option value="Maryland">Maryland</option>
					  <option value="Massachusetts">Massachusetts</option>
					  <option value="Michigan">Michigan</option>
					  <option value="Minnesota">Minnesota</option>
					  <option value="Mississippi">Mississippi</option>
					  <option value="Missouri">Missouri</option>
					  <option value="Montana">Montana</option>
					  <option value="Nebraska">Nebraska</option>
					  <option value="Nevada">Nevada</option>
					  <option value="NewHampshire">New Hampshire</option>
					  <option value="NewJersey">New Jersey</option>
					  <option value="NewMexico">New Mexico</option>
					  <option value="NewYork">New York</option>
					  <option value="NorthCarolina">North Carolina</option>
					  <option value="NorthDakota">North Dakota</option>
					  <option value="Ohio">Ohio</option>
					  <option value="Oklahoma">Oklahoma</option>
					  <option value="Oregon">Oregon</option>
					  <option value="Pennsylvania">Pennsylvania</option>
					  <option value="RhodeIsland">Rhode Island</option>
					  <option value="SouthCarolina">South Carolina</option>
					  <option value="SouthDakota">South Dakota</option>
					  <option value="Tennessee">Tennessee</option>
					  <option value="Texas">Texas</option>
					  <option value="Utah">Utah</option>
					  <option value="Vermont">Vermont</option>
					  <option value="Virginia">Virginia</option>
					  <option value="Washington">Washington</option>
					  <option value="WestVirginia">West Virginia</option>
					  <option value="Wisconsin">Wisconsin</option>
					  <option value="Wyoming">Wyoming</option>
					</select>
		
					<label>Place Name</label>
					<input type="text" name="placename" id="placename"/>

					<label>Review</label>
					<input type="text" name="placereview" id="placereview"/>
	
				<br/>
				<br/>
				<button onClick={this.props.newPlace}>Submit</button>
				</div>
			</div>
			<div className="bottom"></div>
		</div>			
  		);
  	};
}

const MapStateToProps = function(state, ownProps){
	return {
		usrLoggedIn:state.users.loggedIn
	}
}

const MapDispatchToProps = function(dispatch){
	return {newPlace: (evt) => {
		console.log(evt)
		let state = document.getElementById('state').value,
			placename = document.getElementById('placename').value,
			placereview = document.getElementById('placereview').value;
		addPlace({state, placename, placereview}, dispatch)
	}}
}

export default connect(MapStateToProps, MapDispatchToProps)(NewPlace);