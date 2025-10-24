import { useActionState, useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Anchor, Box, Button, Center, Checkbox, Container, Group, Loader, Paper, PasswordInput, Text, TextInput, Title } from '@mantine/core';
import classes from './Login.module.css';
import { isEmail, useForm } from '@mantine/form';

const Login = () => {
  const authContext = useAuthContext();
  const navigate = useNavigate();

  const [currentState, submitDealJacketAction, isPending] = useActionState(async (previousState: any, formData: FormData) => {
    // 1. Extract Form Data
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const { success, data, error: signInError }: any = await authContext.signInUser(email, password);

    if (signInError) {
      console.error(new Error(signInError));
      return new Error(signInError);
    }

    if (success && data?.session) {
      return navigate('/admin');
    }

    return null;
  }, null);

  const [loginCredentials, setLoginCredentials] = useState({
    username: '',
    password: '',
  });

  const onFormChange = (event: any) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setLoginCredentials({
      ...loginCredentials,
      [inputName]: inputValue,
    });
  };

  const submitLogin = async (event: any) => {
    let formData = new FormData();
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginCredentials),
      });
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container>
        {isPending ? (
          <Box>
            <Loader size={100} color="red" />
          </Box>
        ) : (
          <Box>
            <Title ta="center" className={classes.title}>
              Mardy's Fine Cars
            </Title>

            <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
              <form action={submitDealJacketAction}>
                <TextInput name="email" label="Email" placeholder="you@mantine.dev" required radius="md" />
                <PasswordInput name="password" label="Password" placeholder="Your password" required mt="md" radius="md" />
                <Button type="submit" fullWidth mt="xl" radius="md" color="red">
                  Sign in
                </Button>
              </form>
            </Paper>
          </Box>
        )}
      </Container>
    </>
  );
};

export default Login;
