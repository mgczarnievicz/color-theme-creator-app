// import React from 'react';
import { useState } from 'react';

import './ColorInput.css';

export default function ColorInput({ name, initialColor }) {
	const [input, setInput] = useState(initialColor);
	const [color, setColor] = useState(initialColor);

	function isHexa(str) {
		const regexp = /^[0-9a-fA-F]+$/;

		return regexp.test(str) ? true : false;
	}

	function handleChangeText(e) {
		if (e.target.value.length > 7) return;
		setInput(e.target.value);
		if (
			e.target.value.length == 7 &&
			e.target.value.startsWith('#') &&
			isHexa(e.target.value.trim().substring(1))
		) {
			setColor(e.target.value);
		}
	}

	function handleColorChange(e) {
		setInput(e.target.value);
		setColor(e.target.value);
	}

	return (
		<div>
			<input
				type='text'
				id={name}
				value={input}
				onChange={handleChangeText}
			/>
			<input
				type='color'
				name={name}
				id={name}
				value={color}
				onChange={handleColorChange}
			/>
		</div>
	);
}
