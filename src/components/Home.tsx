import Calculator from './Calculator'
import Cars from './Cars';
import useCars from '../hooks/useCars'
import { useState } from 'react';
import Header from './Header';

function Home() {
	const [filteredCars, setFilteredCars] = useState([]);
	const cars = useCars();

	console.log(cars);

	const getCarListByPrice = async (cash: number) => {
		const result  = await fetch(`http://localhost:8000/car/${cash}`);
		console.log(result);
		setFilteredCars(
			cars
				.filter((car: any) => car.price <= cash)
				.sort((a: any, b: any) => {
					return b.price - a.price;
				})
		);
	};

	return (
		<>
			<Header />
			<Calculator onSubmitCash={getCarListByPrice} />
			<Cars cars={filteredCars} />
		</>
	);
}

export default Home;