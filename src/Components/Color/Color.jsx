import { useState } from 'react';

import Delete from '../Delete/Delete';

import './Color.css';

export default function Color({ color, onDelete }) {
	const [showDelete, setShowDelete] = useState(false);

	function handleConfirmDelete() {
		setShowDelete(!showDelete);
	}

	function handleCancelDelete() {
		setShowDelete(!showDelete);
	}

	function handleDeleteColor() {
		onDelete(color.id);
	}

	return (
		<div
			className='color-card'
			style={{
				background: color.hex,
				color: color.contrastText,
			}}>
			<h3 className='color-card-highlight'>{color.hex}</h3>
			<h4>{color.role}</h4>
			<p>contrast: {color.contrastText}</p>
			{!showDelete && (
				<button onClick={handleConfirmDelete}>DELETE</button>
			)}
			{showDelete && (
				<Delete
					onCancelDelete={handleCancelDelete}
					onDelete={handleDeleteColor}
				/>
			)}
		</div>
	);
}
