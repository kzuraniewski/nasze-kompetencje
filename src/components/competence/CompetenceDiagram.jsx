import React from 'react';
import competences from '../competences';
import Diagram from '../Diagram';
import Competence from './Competence';
import diagramImg from '../../assets/diagram.svg';

/**
 * Creates a diagram with competences collecting their content from a module
 */
export default function CompetenceDiagram() {
	const getCompetenceAlign = index => {
		const length = competences.length;

		// index 0 is always 'top'
		if (index === 0) return 'top';

		// if even number of competences - bottom center
		if (length % 2 === 0 && index === length / 2) return 'bottom';

		// right side
		if (index < length / 2) return 'right';

		// left side left
		return 'left';
	};

	return (
		<div className='CompetenceDiagram'>
			<div className='CompetenceDiagram__text'>Poznaj nasze kompetencje</div>

			<div className='CompetenceDiagram__circle' />

			<img className='CompetenceDiagram__image' src={diagramImg} alt='Diagram' />

			<Diagram radius={270}>
				{competences.map(({ icon, name }, index) => (
					<Competence key={index} icon={icon} align={getCompetenceAlign(index)}>
						{name}
					</Competence>
				))}
			</Diagram>
		</div>
	);
}
