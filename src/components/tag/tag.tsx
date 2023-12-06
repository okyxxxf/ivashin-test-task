import React, { ReactElement } from 'react';
import './tag.css';

interface tagProps {
  text : string,
}

const Tag = ({text} : tagProps) : ReactElement => {
	return (
		<li className='tag'>{text}</li>
	)
};

export default Tag;