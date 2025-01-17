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

	function addColor(newColor) {
		setColors([{ id: nanoid(), ...newColor }, ...colors]);
	}

	function deleteColor(id) {
		const newColors = colors.filter((color) => color.id !== id);
		setColors(newColors);
	}
	function editColor(updateColor) {
		const newColors = colors.map((color) => {
			if (color.id === updateColor.id) return updateColor;
			else return color;
		});

		setColors(newColors);
	}
	return (
		<>
			<h1>Theme Creator</h1>
			<ColorForm onSubmitColor={addColor} />
			{colors.map((color) => {
				return (
					<Color
						key={color.id}
						color={color}
						onDeleteColor={deleteColor}
						onEditColor={editColor}
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
