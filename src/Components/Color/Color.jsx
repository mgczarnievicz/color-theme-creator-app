import { useState } from 'react';

import Delete from '../Delete/Delete';

import './Color.css';
import ColorForm from '../ColorForm/ColorForm';
import CopyToClipboard from '../CopyToClipboard/CopyToClipboard';
import ContrastCheck from '../ContrastCheck/ContrastCheck';

export default function Color({ color, onDeleteColor, onEditColor }) {
	const [showDelete, setShowDelete] = useState(false);
	const [showUpdate, setShowUpdate] = useState(false);

	function handleToggleDelete() {
		setShowDelete(!showDelete);
	}

	function handleDeleteColor() {
		onDeleteColor(color.id);
	}

	function handleToggleUpdate() {
		setShowUpdate(!showUpdate);
	}

	function handleUpdateColor(newColor) {
		handleToggleUpdate();
		onEditColor(newColor);
	}

	return (
		<div
			className='color-card'
			style={{
				background: color.hex,
				color: color.contrastText,
			}}>
			<h3 className='color-card-highlight'>{color.hex}</h3>
			<CopyToClipboard text={color.hex} />
			<h4>{color.role}</h4>
			<p>contrast: {color.contrastText}</p>
			{showUpdate && (
				<ColorForm
					initialColor={color}
					onSubmitColor={handleUpdateColor}
				/>
			)}
			<ContrastCheck color={color} />
			
			{!showDelete && (
				<button onClick={handleToggleDelete}>DELETE</button>
			)}
			{showDelete && (
				<Delete
					onCancelDelete={handleToggleDelete}
					onDelete={handleDeleteColor}
				/>
			)}

			{!showUpdate && (
				<button onClick={handleToggleUpdate}>Update</button>
			)}
		</div>
	);
}
