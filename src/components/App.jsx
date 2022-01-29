import React from 'react';
import Section from './Section';

export default function App() {
	return (
		<div className='App container'>
			<main>
				<Section
					title='Obszary naszych kompetencji'
					subtitle='Pomagamy uczyć się na błędach innych. Wspieramy i rekomendujemy wartościowe rozwiązania biznesowe.'
				>
					*content*
				</Section>
			</main>
		</div>
	);
}
