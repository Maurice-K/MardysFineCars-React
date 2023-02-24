import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Modal,
	Typography,
	Box,
	TextField,
} from '@mui/material';
import { useState } from 'react';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

type CarProps = {
	car: any;
};

type DealJacketInputsProps = {
	firstName: string;
	lastName: string;
	phoneNumber: string;
};

const Car = ({ car }: CarProps) => {
	const [openModal, setOpenModal] = useState(false);
	const [dealJacketInputs, setDealJacketInputs] =
		useState<DealJacketInputsProps>({
			firstName: '',
			lastName: '',
			phoneNumber: '',
		});

	const onSubmitDealJacket = (event: any) => {
		event.preventDefault();
		console.log(dealJacketInputs);
	};

	const onDealJacketChange = (event: any) => {
		const inputName = event.target.name;
		const inputValue = event.target.value;
		setDealJacketInputs({
			...dealJacketInputs,
			[inputName]: inputValue,
		});
	};

	return (
		<>
			<Card>
				<CardMedia
					component='img'
					height='140'
					image='/static/images/cards/contemplative-reptile.jpg'
					alt='green iguana'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{car.brand}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{car.price}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size='small' onClick={() => setOpenModal(true)}>
						I want it!
					</Button>
				</CardActions>
			</Card>

			<Modal open={openModal} onClose={() => setOpenModal(false)}>
				<Box sx={style}>
					<Typography id='modal-modal-title' variant='h6' component='h2'>
						This {car.brand} is almost yours!
					</Typography>

					<form onSubmit={onSubmitDealJacket}>
						<TextField
							label='First Name'
							name='firstName'
							value={dealJacketInputs.firstName}
							onChange={onDealJacketChange}
						/>

						<TextField
							label='Last Name'
							name='lastName'
							value={dealJacketInputs.lastName}
							onChange={onDealJacketChange}
						/>

						<TextField
							label='Phone Number'
							name='phoneNumber'
							value={dealJacketInputs.phoneNumber}
							onChange={onDealJacketChange}
						/>
					</form>

					<Typography id='modal-modal-description' sx={{ mt: 2 }}>
						<Button onClick={onSubmitDealJacket}>Submit Deal</Button>
					</Typography>
				</Box>
			</Modal>
		</>
	);
};

export default Car;