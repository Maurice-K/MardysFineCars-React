import Car from './Car';
import { SimpleGrid, Text, Title } from '@mantine/core';

const Cars = ({ cars }: any) => {
  const renderedCars = cars.map((car: any) => {
    return <Car car={car} key={car.id} />;
  });

  return renderedCars.length === 0 ? (
    <Title order={2} ta="center">
      No cars
    </Title>
  ) : (
    <SimpleGrid cols={4}>{renderedCars}</SimpleGrid>
  );
};

export default Cars;
