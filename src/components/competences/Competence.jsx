import React from 'react';

/**
 * Competence consisting of icon and title
 * @param {object} props
 * @param {string} props.icon - image path to the icon
 * @param {React.ReactNode} props.children - name of the competence
 */
export default function Competence({ icon, children }) {
	return (
		<div className='Competence'>
			<img src={icon} alt='competence' className='Competence__icon' />

			<h2 className='Competence__name'>{children}</h2>
		</div>
	);
}
