import React from 'react';
import Section from './Section';

export default function App() {
	return (
		<div className='App'>
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
