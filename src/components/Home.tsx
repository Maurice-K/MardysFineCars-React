import Calculator from './Calculator';
import Cars from './Cars';
import { useEffect, useState } from 'react';
import Header from './Header';
import supabase from '../supabase-client';
import useInventory from '../hooks/useInventory';
import { useAuthContext } from '../context/AuthContext';

function Home() {
  const [filteredCars, setFilteredCars] = useState([]);
  const { cars } = useInventory();
  const { session }: any = useAuthContext();

  console.log(cars);
  console.log(session);

  const getCarListByPrice = (cash: number) => {
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
