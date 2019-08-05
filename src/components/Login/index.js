import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles, Container, Box } from './styles';

const Login = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box background="#46468f">
        <h1>GraTiTude</h1>
        <p>Uma nova forma de interagir com sua espiritualidade</p>
        <h4>Ainda não tem uma conta</h4>
        <Button variant="contained" color="default" className={classes.button}>
          clique aqui
        </Button>
      </Box>
      <Box>
        <h2>Acessar</h2>
        <TextField
          id="outlined-email"
          className={classes.textField}
          type="text"
          label="E-Mail"
          margin="email"
          variant="outlined"
        />
        <TextField
          id="outlined-password"
          className={classes.textField}
          type="password"
          label="Senha"
          margin="password"
          variant="outlined"
        />
        <Button variant="contained" color="primary" className={classes.button}>
          Entrar
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
