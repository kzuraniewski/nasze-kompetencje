import React from 'react';

/**
 * Places its children in a circle pattern
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {number} [props.radius = 200] - radius of the diagram in pixels, relative to the parent component
 */
export default function Diagram({ radius = 200, children }) {
	const getChildStyle = index => {
		// element's rotation based on index, rotated by 90 deg to the left
		let rotation = index * (360 / React.Children.count(children)) - 90;

		// use values between 0 and 360
		if (rotation < 0) rotation += 360;

		return {
			transform: `rotate(${rotation}deg) translate(${radius}px) rotate(-${rotation}deg) translate(-50%, calc(-50% + ${radius}px))`,
		};
	};

	return (
		<div className='Diagram' style={{ height: `${radius * 2}px` }}>
			{React.Children.map(children, (child, index) => (
				<div key={index} style={getChildStyle(index)}>
					{React.cloneElement(child)}
				</div>
			))}
		</div>
	);
}
