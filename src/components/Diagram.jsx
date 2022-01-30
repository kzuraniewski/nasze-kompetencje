import React from 'react';

/**
 * Places its children in a circle pattern
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.size = '100px'] - the size of the diagram in css units
 */
export default function Diagram({ size = '200px', children }) {
	const getChildStyle = index => {
		// element's rotation based on index, rotated by 90 deg to the left
		let rotation = index * (360 / React.Children.count(children)) - 90;

		// use values between 0 and 360
		if (rotation < 0) rotation += 360;

		return {
			transform: `rotate(${rotation}deg) translate(${size}) rotate(-${rotation}deg) translate(-50%, calc(${size} / 2 - 50%))`,
		};
	};

	return (
		<div className='Diagram'>
			{React.Children.map(children, (child, index) => (
				<div key={index} style={getChildStyle(index)}>
					{React.cloneElement(child)}
				</div>
			))}
		</div>
	);
}
