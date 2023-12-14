import { Button, TextField } from "@mui/material";
import { useState } from "react";


const Login = () => {

  const [loginCredentials, setLoginCredentials] = useState({
    username: '',
    password: ''
  });

  const onFormChange = (event: any) => {
    const inputName = event.target.name;
		const inputValue = event.target.value;
		setLoginCredentials({
			...loginCredentials,
			[inputName]: inputValue,
		});
  }

  const submitLogin = async (event: any) => {
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
      console.error(error)
    }



  }


  return <>
    <form onSubmit={(event) => submitLogin(event)}>
      <TextField label="User Name" name="username" value={loginCredentials.username} onChange={onFormChange} />
      <TextField type="password" label="Password" name="password" value={loginCredentials.password} onChange={onFormChange} />
      <Button value="submit" type="submit">Submit</Button>
    </form>
  </>
}


export default Login