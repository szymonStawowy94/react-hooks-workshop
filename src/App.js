import React, {useState} from "react"
import logo from './logo.svg';
import './App.css';

const App = () => {
	const [shoppingList, setShoppingList] = useState([]); // [state, setState]
	const [inputValue, setInputValue] = useState(""); // [state, setState]

	const addItemToShoppingList = (value) => {
		setShoppingList([...shoppingList, value])
		setInputValue("")
	}

	const handleInputChange = e => {
		setInputValue(e.target.value)
	}
	return (
		<div className="App">
			<ul>
				{shoppingList.map(item => (
					<li>{item}</li>
				))}
			</ul>
			<input value={inputValue} onChange={handleInputChange} name="item"/>
			<h1>{inputValue}</h1>
			<button onClick={() => addItemToShoppingList(inputValue)}>Add</button>
		</div>
	);
}


export default App;
