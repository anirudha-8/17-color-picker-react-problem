import { useState } from "react";
import "./App.css";

function App() {
	const [selectedColor, setSelectedColor] = useState("#000000");

	return (
		<div>
			<label htmlFor="color">Select Color: </label>
			<input
				type="color"
				name="color"
				id="color"
				onChange={(e) => setSelectedColor(e.target.value)}
				value={selectedColor}
			/>
		</div>
	);
}

export default App;
