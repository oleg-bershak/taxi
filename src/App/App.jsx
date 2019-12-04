import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { theme } from 'loft-taxi-mui-theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppRouter from './containers/AppRouter';
import Header from './components/Header';

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <AppRouter />
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}
