import { useState } from 'react';

export default function CopyToClipboard({ text }) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);

			// Reset the copied state after a few seconds
			setTimeout(() => setCopied(false), 3000);
		} catch (error) {
			console.error('Failed to copy: ', error);
		}
	};

	return (
		<button className='color-card__button' onClick={handleCopy}>
			{copied ? 'SUCCESSFULLY COPIED!' : 'COPY'}
		</button>
	);
}
