// import React from 'react';
import { useState } from 'react';

import './ColorInput.css';
import { useEffect } from 'react';

export default function ColorInput({ name, initColor }) {
	const [input, setInput] = useState(initColor);
	const [color, setColor] = useState(initColor);

	useEffect(() => {
		setInput(initColor);
		setColor(initColor);
	}, []);

	function isHexa(str) {
		const regexp = /^[0-9a-fA-F]+$/;

		if (regexp.test(str)) {
			console.log('isHexa', str);

			return true;
		} else {
			console.log('NOT isHexa', str);

			return false;
		}
	}

	function handleChange(e) {
		if (e.target.value.length > 8) return;
		setInput(e.target.value);
		if (
			e.target.value.length == 7 &&
			e.target.value.startsWith('#') &&
			isHexa(e.target.value.trim().substring(1))
		) {
			console.log('Save Value');
			setColor(e.target.value);
		}
		console.log('handleChange', e.target.value, e.target.value.length);
		// setColor(e.target.value);
	}

	function handleColorChange(e) {
		setInput(e.target.value);
		setColor(e.target.value);
		console.log('handleColorChange', e.target.value);
	}
	return (
		<div>
			<input
				type='text'
				id='color'
				value={input}
				onChange={handleChange}
			/>
			<input
				type='color'
				name={name}
				id='color'
				value={color}
				onChange={handleColorChange}
			/>
		</div>
	);
}
