import { initialColors } from './lib/colors';
import Color from './Components/Color/Color';
import './App.css';
import ColorForm from './Components/ColorForm/ColorForm';

import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';

function App() {
	const [colors, setColors] = useState(initialColors);

	useEffect(() => {
		console.log('Change colors', colors);
	}, [colors]);

	function addColor(color) {
		setColors([{ id: nanoid(), ...color }, ...colors]);
	}

	function deleteColor(id) {
		const newColors = colors.filter((color) => color.id !== id);
		setColors(newColors);
	}
	return (
		<>
			<h1>Theme Creator</h1>
			<ColorForm onAddColor={addColor} />
			{colors.map((color) => {
				return (
					<Color
						key={color.id}
						color={color}
						onDelete={deleteColor}
					/>
				);
			})}

			{!colors.length && (
				<>
					<p>No colors</p>
					<h2>Add more colors!</h2>
				</>
			)}
		</>
	);
}

export default App;
