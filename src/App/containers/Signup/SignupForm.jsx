import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Paper,
  Container,
  Typography,
  Link,
  Grid,
  TextField,
  Box,
  Button,
} from '@material-ui/core/';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import { useFormStyles } from './styles';
import { getIsLoggedIn, getError, sendRegisterRequest } from '../../store/auth';

const LoginLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

const SignupForm = props => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    name: '',
    surname: '',
  });

  const { sendRegisterRequest, isLoggedIn } = props;

  const onSubmit = event => {
    event.preventDefault();
    sendRegisterRequest(userInfo);
  };

  const onInputChange = event => {
    let input = event.target;
    setUserInfo({ ...userInfo, [input.name]: input.value });
  };

  const classes = useFormStyles();

  if (isLoggedIn) {
    return <Redirect to="/map" />;
  }

  return (
    <Paper className={classes.form}>
      <Container className={classes.formContainer}>
        <Typography variant="h4" component="h1">
          Регистрация
        </Typography>
        <div>
          <p>
            Уже зарегистрирован?{' '}
            <Link to="/login" component={LoginLink}>
              Войти
            </Link>
          </p>
        </div>
        <form onSubmit={onSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Адрес электронной почты"
                type="email"
                name="email"
                value={userInfo.email}
                onChange={onInputChange}
                inputProps={{ 'data-testid': 'inputEmail' }}
                margin="normal"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Имя"
                type="text"
                name="name"
                value={userInfo.name}
                onChange={onInputChange}
                inputProps={{ 'data-testid': 'inputName' }}
                margin="normal"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Фамилия"
                type="text"
                name="surname"
                value={userInfo.surname}
                onChange={onInputChange}
                inputProps={{ 'data-testid': 'inputSurname' }}
                margin="normal"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Пароль"
                type="password"
                name="password"
                value={userInfo.password}
                onChange={onInputChange}
                inputProps={{ 'data-testid': 'inputPassword' }}
                margin="normal"
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Box className={classes.buttonContainer}>
            <Button type="submit" variant="contained" color="primary">
              Зарегистрироваться
            </Button>
          </Box>
        </form>
      </Container>
    </Paper>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: getIsLoggedIn(state),
  error: getError(state),
});

const mapDispatchToProps = { sendRegisterRequest };

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
