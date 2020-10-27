import React, {useState} from "react"
import './App.css';
import {countries} from "./countries"

const App = () => {
	const [countryList, setCoutryList] = useState(countries); // [state, setState]
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = e => {
		setInputValue(e.target.value);
		setCoutryList(countryList.filter(country => country.toLowerCase().includes(e.target.value.toLowerCase())))
		if(!e.target.value.length) {
			setCoutryList(countries)
		}
	}
	return (
		<div className="App">
			<label for="country">Search country</label>
			<input
				value={inputValue}
				onChange={handleInputChange}
				name="country"
				id="country"/>
			<ul>
				{countryList.map(country => (
					<li>{country}</li>
				))}
			</ul>
		</div>
	);
}


export default App;
