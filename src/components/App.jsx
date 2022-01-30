import React from 'react';
import Section from './Section';
import CompetenceDiagram from './competence/CompetenceDiagram';
import Contact from './Contact';

export default function App() {
	return (
		<div className='App container'>
			<main>
				<Section
					title='Obszary naszych kompetencji'
					subtitle='Pomagamy uczyć się na błędach innych. Wspieramy i rekomendujemy wartościowe rozwiązania biznesowe.'
				>
					<CompetenceDiagram />
				</Section>
				<Section title='Skontaktuj się z nami' subtitle='Zadzwoń +48 535 015 835 lub wypełnij formularz.'>
					<Contact />
				</Section>
			</main>
		</div>
	);
}
