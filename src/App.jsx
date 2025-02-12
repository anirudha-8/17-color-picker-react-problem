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
			<hr />
			<h1>Preview of selected color...</h1>
			<div
				style={{
					width: "200px",
					height: "200px",
					border: "1px solid gray",
					backgroundColor: selectedColor,
				}}
			></div>
		</div>
	);
}

export default App;
