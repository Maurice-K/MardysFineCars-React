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

  const submitLogin = async () => {
    console.log()
  }


  return <>
    <form onSubmit={submitLogin}>
      <TextField label="User Name" name="username" value={loginCredentials.username} onChange={onFormChange} />
      <TextField type="password" label="Password" name="username" value={loginCredentials.username} onChange={onFormChange} />
      <Button value="submit" type="submit">Submit</Button>
    </form>


  </>
}


export default Login