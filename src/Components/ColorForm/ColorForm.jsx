// import React from 'react';
import ColorInput from '../ColorInput/ColorInput';

import './ColorForm.css';

export default function ColorForm({
	onSubmitColor,
	initialColor = { role: '', hex: '#678967', contrastText: '#020202' },
}) {
	function handleSubmit(e) {
		e.preventDefault();

		const dataForm = new FormData(e.target);
		const data = Object.fromEntries(dataForm.entries());

		console.log('Submit', data);
		if (initialColor.id) {
			data.id = initialColor.id;
		}
		e.target.reset();
		onSubmitColor(data);
	}
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='role'>Role</label>
			<input
				type='text'
				name='role'
				id='role'
				defaultValue={initialColor.role}
			/>

			<label htmlFor='hex'>Hexa</label>
			<ColorInput name='hex' initialColor={initialColor.hex} />

			<label htmlFor='contrastText'>Contract Text</label>
			<ColorInput
				name='contrastText'
				initialColor={initialColor.contrastText}
			/>

			<button type='submit'>{initialColor.id ? 'Update' : 'Add'}</button>
		</form>
	);
}
