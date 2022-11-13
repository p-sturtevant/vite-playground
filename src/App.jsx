import { CssBaseline, TextField } from '@mui/material';
import green from '@mui/material/colors/green';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import Loading from './Loading.jsx';
function App() {
	const [count, setCount] = useState(0);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);
	return (
		<>
			{loading && <Loading />}

			{/* Nav Bar */}
			<div className="h-fit  mx-auto bg-yellow-50 lg:w-full md: w-4/5  px-6 pt-6 pb-4 flex justify-between align-bottom">
				<h1 className="text-4xl text-stone-500	">Logo</h1>
				<div className="flex text-lg  items-end  w-fit gap-6 text-stone-600">
					<label className="hover:text-green-700 hover:transition-colors hover:ease-in">
						Login
					</label>
					<label className="hover:text-green-700 hover:transition-colors hover:ease-in">
						My Plants
					</label>
					<TextField
						variant="standard"
						label="Search"
						sx={{
							'& .MuiInput-underline:before': { borderBottomColor: 'stone' },
							'& .MuiInput-underline:after': {
								borderBottomColor: 'rgba(4, 120, 87)',
							},
							'& .css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root': {
								color: 'rgb(87 83 78)',
								fontSize: 18,
							},
							'& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
								{
									color: 'rgb(87 83 78)',
								},
						}}
					></TextField>
				</div>
			</div>

			{/* Main Content */}
			<div className="flex w-screen mx-10 mt-20">
				{/* Waterlog (turn to individual components) */}
				<div
					id="water-log"
					className="bg-yellow-50 h-fit w-1/4 flex flex-col p-3 text-xl"
				>
					<div className=" w-full border-b-stone-500 border-b-2 p-2 my-2">
						Water Log
					</div>
					<div className=" w-full border-b-stone-500 border-b-2 p-2 my-2">
						Water Log
					</div>
					<div className=" w-full border-b-stone-500 border-b-2 p-2 my-2">
						Water Log
					</div>
					<div className=" w-full border-b-stone-500 border-b-2 p-2 my-2">
						Water Log
					</div>
				</div>

				{/* Plant of The Day */}
			</div>
		</>
	);
}

export default App;
