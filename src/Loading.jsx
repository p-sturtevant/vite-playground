import CircularProgress from '@mui/material/CircularProgress';
import { React, useState } from 'react';

const Loading = () => {
	return (
		<div className="h-screen w-screen bg-yellow-50 flex justify-center items-center">
			<CircularProgress size={50} color="success" />
		</div>
	);
};

export default Loading;
