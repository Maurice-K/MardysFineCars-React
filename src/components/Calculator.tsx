import { useState } from 'react';
import { Button, Container, Stack, TextField } from '@mui/material';
import styles from './Calculator.module.css';

type CalculatorProps = {
	onSubmitCash: (value: number) => void;
};

const Calculator = ({ onSubmitCash }: CalculatorProps) => {
	let [cash, setCash] = useState('');

	const onSubmitCashOnHand = (event: any) => {
		event.preventDefault();
		onSubmitCash(parseInt(cash));
	};

	return (
		<div className={styles.formWrapper}>
			<form onSubmit={onSubmitCashOnHand} className='calculator'>
				<Container maxWidth='sm'>
					<Stack>
						<TextField
							label='Enter price here'
							type='number'
							variant='outlined'
							value={cash}
							onChange={(e) => {
								setCash(e.target.value);
							}}
						/>
						<Button variant='contained' onClick={onSubmitCashOnHand}>
							Find My Car
						</Button>
					</Stack>
				</Container>
			</form>
		</div>

	);
};

export default Calculator;
