import { Badge, Button, Card, Center, Group, Image, Text, Modal, TextInput, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import classes from './Car.module.css';

import { useActionState, useState } from 'react';

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

function submitDealJacket(previousState: any, formData: FormData) {
  const dealJacket = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    phoneNumber: formData.get('phoneNumber'),
    make: formData.get('make'),
    model: formData.get('model'),
  };
}

const Car = ({ car }: CarProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  // const [state, formAction] = useActionState()

  const [dealJacketInputs, setDealJacketInputs] = useState<DealJacketInputsProps>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });

  const onSubmitDealJacket = (event: any) => {
    event.preventDefault();
    console.log(dealJacketInputs);
    close();
    setDealJacketInputs({
      firstName: '',
      lastName: '',
      phoneNumber: '',
    });
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
      {/* <Card>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {car.make}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {car.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Mileage: {car.mileage}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => setOpenModal(true)}>
            I want it!
          </Button>
        </CardActions>
      </Card> */}

      <Modal opened={opened} onClose={close} centered size="lg">
        <div>
          <Title id="modal-modal-title" order={3}>
            This {car.make} is almost yours!
          </Title>

          <form onSubmit={onSubmitDealJacket}>
            <TextInput label="First Name" name="firstName" value={dealJacketInputs.firstName} onChange={onDealJacketChange} />

            <TextInput label="Last Name" name="lastName" value={dealJacketInputs.lastName} onChange={onDealJacketChange} />

            <TextInput label="Phone Number" name="phoneNumber" value={dealJacketInputs.phoneNumber} onChange={onDealJacketChange} />
          </form>

          <Text id="modal-modal-description">
            <Button onClick={onSubmitDealJacket}>Submit Deal</Button>
          </Text>
        </div>
      </Modal>

      <Card withBorder radius="md" className={classes.card}>
        <Card.Section className={classes.imageSection}>Insert Image Here</Card.Section>

        <Group justify="space-between" mt="md">
          <div>
            <Text fw={500}> {car.make}</Text>
            <Text fz="xs" c="dimmed">
              Free recharge at any station
            </Text>
          </div>
          <Badge variant="outline">25% off</Badge>
        </Group>

        <Card.Section className={classes.section} mt="md">
          <Text fz="sm" c="dimmed" className={classes.label}>
            Basic configuration
          </Text>

          <Group gap={8} mb={-8}>
            {/* {features} */}
          </Group>
        </Card.Section>

        <Card.Section className={classes.section}>
          <Group gap={30}>
            <div>
              <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
                ${car.price}
              </Text>
            </div>

            <Button radius="xl" style={{ flex: 1 }} onClick={open}>
              Rent now
            </Button>
          </Group>
        </Card.Section>
      </Card>
    </>
  );
};

export default Car;
