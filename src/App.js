import React, {useState, useRef} from "react"
import './App.css';
import {countries} from "./countries"

const App = () => {
	const myBox = useRef(null);

	console.log(myBox)

	const changeBoxColor = () => {
		myBox.current.style.background = "blue";
	}
	return (
		<div className="App">
			<div className="box" ref={myBox}/>
			<button onClick={changeBoxColor}>change color</button>
		</div>
	);
}


export default App;
