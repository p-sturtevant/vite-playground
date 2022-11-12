import { CssBaseline, TextField } from '@mui/material';
import green from '@mui/material/colors/green';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import reactLogo from './assets/react.svg';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="h-fit my-20 mx-auto bg-yellow-50 w-2/3 rounded-xl px-6 pt-6 pb-4 flex justify-start">
				<TextField
					variant="standard"
					fullWidth
					label="Search for your Favorite Plants"
					sx={{
						'& .MuiInput-underline:before': { borderBottomColor: 'stone' },
						'& .MuiInput-underline:after': {
							borderBottomColor: 'rgba(4, 120, 87)',
						},
						'& .css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root': {
							color: 'stone',
						},
						'& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
							color: 'rgba(4, 120, 87)',
						},
					}}
				></TextField>
			</div>
			<div className="h-fit my-20 mx-auto bg-yellow-50 w-2/3 rounded-xl px-6 pt-6 pb-4 flex justify-start"></div>
		</>
	);
}

export default App;
