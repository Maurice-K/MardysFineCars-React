import { Grid, Typography } from '@mui/material';
import Car from './Car';

const Cars = ({ cars }: any) => {
	const renderedCars = cars.map((car: any) => {
		return (
			<Grid item xs={2} md={3} key={car.id}>
				<Car car={car} />
			</Grid>
		);
	});

	return renderedCars.length === 0 ? (
		<Typography variant='h1' textAlign='center'>
			No cars
		</Typography>
	) : (
		<Grid container spacing={4}>
			{renderedCars}
		</Grid>
	);
};

export default Cars;