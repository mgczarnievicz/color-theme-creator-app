export default function Delete({ onCancelDelete, onDelete }) {
	return (
		<div>
			<p className='color-card-highlight'>Really Delete?</p>
			<button className='color-card__button' onClick={onCancelDelete}>
				CANCEL
			</button>
			<button className='color-card__button' onClick={onDelete}>
				DELETE
			</button>
		</div>
	);
}
