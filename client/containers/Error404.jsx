import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../components/Title';

function Error404() {
	return (
		<section name="Error404" >
			<Title text={'Error 404'}/>
			<Link to="/">Home</Link>
		</section>
	);
}

export default Error404;
