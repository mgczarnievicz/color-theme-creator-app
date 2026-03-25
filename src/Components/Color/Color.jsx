import { useState } from 'react';

import Delete from '../Delete/Delete';

import './Color.css';
import ColorForm from '../ColorForm/ColorForm';
import CopyToClipboard from '../CopyToClipboard/CopyToClipboard';
import ContrastCheck from '../ContrastCheck/ContrastCheck';

export default function Color({ color, onDeleteColor, onEditColor }) {
	/* Modes: default, edit, delete */
	const [mode, setMode] = useState('default');

	function handleDeleteColor() {
		onDeleteColor(color.id);
	}

	function handleUpdateColor(newColor) {
		setModeDefault();
		onEditColor(newColor);
	}

	function setModeEdit() {
		setMode('edit');
	}
	function setModeDelete() {
		setMode('delete');
	}
	function setModeDefault() {
		setMode('default');
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
			<ContrastCheck color={color} />

			{mode === 'edit' ? (
				<>
					<ColorForm
						initialColor={color}
						onSubmitColor={handleUpdateColor}
					/>
					<button
						className='color-card__button-cancel'
						onClick={setModeDefault}>
						Cancel
					</button>
				</>
			) : mode === 'delete' ? (
				<>
					<Delete
						onCancelDelete={setModeDefault}
						onDelete={handleDeleteColor}
					/>
				</>
			) : (
				<>
					<button
						className='color-card__button'
						onClick={setModeEdit}>
						Update
					</button>

					<button
						className='color-card__button'
						onClick={setModeDelete}>
						DELETE
					</button>
				</>
			)}
		</div>
	);
}
