import React from 'react';

/**
 * Section with a title and optional subtitle, rendering children below
 * @param {object} props
 * @param {string} props.title - title of the section
 * @param {string} [props.subtitle = ''] - subtitle of the section
 * @param {string} [props.children = []] - composition
 */
export default function Section({ title, subtitle = '', children, ...other }) {
	return (
		<section className='Section' {...other}>
			<h1 className='Section__title'>{title}</h1>

			{subtitle.length && <div className='Section__subtitle'>{subtitle}</div>}

			{children}
		</section>
	);
}
