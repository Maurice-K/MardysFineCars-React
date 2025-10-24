import { useState } from 'react';
import styles from './Calculator.module.css';
import { Button, Container, Stack, TextInput } from '@mantine/core';

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
    <div className={styles.formWrapper}>
      <form onSubmit={onSubmitCashOnHand} className="calculator">
        <Container size="sm">
          <Stack>
            <TextInput
              label="Enter price here"
              type="number"
              variant="outlined"
              value={cash}
              onChange={(e) => {
                setCash(e.target.value);
              }}
            />
            <Button variant="filled" onClick={onSubmitCashOnHand}>
              Find My Car
            </Button>
          </Stack>
        </Container>
      </form>
    </div>
  );
};

export default Calculator;
