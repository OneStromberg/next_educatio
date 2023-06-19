import { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
} from '@mui/material';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Добавьте здесь код для обработки входа пользователя
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={handleEmailChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={handlePasswordChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
            Login
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
