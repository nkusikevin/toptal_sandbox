import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
	const [counter, setCounter] = useState(42);
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />

				<div>
					<h2>{counter}</h2>
					<button onClick={() => setCounter(counter + 1)}>Click</button>
				</div>
			</header>
		</div>
	);
}

export default App;
