export default function Delete({ onCancelDelete, onDelete }) {
	return (
		<div>
			<p className='color-card-highlight'>Really Delete?</p>
			<button onClick={onCancelDelete}>CANCEL</button>
			<button onClick={onDelete}>DELETE</button>
		</div>
	);
}
