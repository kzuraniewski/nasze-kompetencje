import React from 'react';

/**
 * Competence consisting of icon and title
 * @param {object} props
 * @param {string} props.icon - image path to the icon
 * @param {'top'|'right'|'bottom'|'left'} props.align - whether the name should be positioned on top, right, bottom or left
 * @param {React.ReactNode} props.children - name of the competence
 */
export default function Competence({ icon, align = 'right', children }) {
	return (
		<div className='Competence'>
			<div className={`Competence__content Competence__content--${align}`}>
				<div className='Competence__icon'>
					<img src={icon} alt='competence' />
				</div>

				<h2 className='Competence__name'>{children}</h2>
			</div>
		</div>
	);
}
