// import React from 'react';
import ColorInput from '../ColorInput/ColorInput';

import './ColorForm.css';

export default function ColorForm({ onAddColor }) {
	function handleSubmit(e) {
		e.preventDefault();

		const dataForm = new FormData(e.target);
		const data = Object.fromEntries(dataForm.entries());

		console.log('Submit', data);
		e.target.reset();
		onAddColor(data);
	}
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='role'>Role</label>
			<input type='text' name='role' id='role' />

			<label htmlFor='hex'>Hexa</label>
			<ColorInput name='hex' initColor={'#123456'} />

			<label htmlFor='contrastText'>Contract Text</label>
			<ColorInput name='contrastText' initColor={'#148491'} />

			<button type='submit'>Add</button>
		</form>
	);
}
