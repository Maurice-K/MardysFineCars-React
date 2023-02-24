import { useState, useEffect } from 'react';

// Custom Hook responsible for GET API call of Cars
const useCars = () => {
	const [cars, setCars] = useState([]);

	useEffect(() => {
		let mounted = true;
		if (mounted) {
			getCarsApi();
		}

		return () => {
			mounted = false;
		};
	}, []);

	const getCarsApi = () => {
		const inventory: any = [
			{
				id: 2341,
				brand: 'Honda',
				mileage: 162521,
				price: 4000,
			},
			{
				id: 135,
				brand: 'Toyota',
				mileage: 4214,
				price: 5000,
			},
			{
				id: 412,
				brand: 'BMW',
				mileage: 512241,
				price: 6000,
			},
			{
				id: 242,
				brand: 'Ford',
				mileage: 15151,
				price: 2500,
			},
			{
				id: 1234,
				brand: 'Audi',
				mileage: 22525,
				price: 2000,
			},
			{
				id: 455,
				brand: 'Chevy',
				mileage: 95000,
				price: 1000,
			},
			{
				id: 3412,
				brand: 'Benz',
				mileage: 61616,
				price: 3000,
			},
		];
		setCars(inventory);
	};

	return cars;
};

export default useCars;