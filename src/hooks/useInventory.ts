import { useState, useEffect } from 'react';
import supabase from '../supabase-client';

// Custom Hook responsible for GET API call of Cars
const useInventory = () => {
	const [cars, setCars] = useState([]);

	async function loadInventory() {
	try {
		const { data, error }: { data: any, error: any} = await supabase.from('inventory').select();
		if (error) {
			throw error
		}
		setCars(data)

	} catch (error) {
		console.error('Error fetching inventory:', error)
	}
}

	useEffect(() => {
		loadInventory();
	}, [])


	return { cars, loadInventory };
};

export default useInventory;