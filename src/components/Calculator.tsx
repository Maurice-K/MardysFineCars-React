import { useState } from 'react';
import classes from './Calculator.module.css';
import { Box, Button, Container, Stack, TextInput } from '@mantine/core';

interface CalculatorProps {
  onSubmitCash: (number: number) => void;
}

const Calculator = ({ onSubmitCash }: CalculatorProps) => {
  let [cash, setCash] = useState('');

  const onSubmitCashOnHand = (event: any) => {
    event.preventDefault();
    onSubmitCash(parseInt(cash));
  };

  return (
    <Box className={classes.formWrapper}>
      <form onSubmit={onSubmitCashOnHand} className="calculator">
        <Container size="sm">
          <Stack>
            <TextInput
              placeholder="Enter price here"
              type="number"
              radius="md"
              value={cash}
              onChange={(e) => {
                setCash(e.target.value);
              }}
            />
            <Button variant="filled" onClick={onSubmitCashOnHand} color="red">
              Find My Car
            </Button>
          </Stack>
        </Container>
      </form>
    </Box>
  );
};

export default Calculator;
