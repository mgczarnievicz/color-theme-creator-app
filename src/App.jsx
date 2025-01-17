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
	return (
		<>
			<h1>Theme Creator</h1>
			<ColorForm onAddColor={addColor} />
			{colors.map((color) => {
				return <Color key={color.id} color={color} />;
			})}
		</>
	);
}

export default App;
