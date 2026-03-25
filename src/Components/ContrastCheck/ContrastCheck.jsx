import { useState } from 'react';
import { useEffect } from 'react';

import './ContrastCheck.css';

export default function ContrastCheck({ color }) {
	const [contrast, setContrast] = useState('Maybe');

	useEffect(() => {
		async function checkContrast() {
			const response = await fetch(
				'https://www.aremycolorsaccessible.com/api/are-they',
				{
					method: 'POST',
					body: JSON.stringify({
						colors: [color.hex, color.contrastText],
					}),
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			const data = await response.json();
			setContrast(data.overall);
		}

		checkContrast();
	}, [color]);
	return (
		<h5 className={`contrast-${contrast.toLowerCase()}`}>
			Overall Contrast Score: {contrast}
		</h5>
	);
}
