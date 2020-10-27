import React, {useState} from "react"
import logo from './logo.svg';
import './App.css';

const App = () => {
	const [counter, changeCounter] = useState(0); // [state, setState]

	return (
		<div className="App">
			<h1>{counter}</h1>
			<button onClick={() => changeCounter(counter - 1)}>-</button>
			<button onClick={() => changeCounter(counter + 1)}>+</button>
		</div>
	);
}


export default App;
