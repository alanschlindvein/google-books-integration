import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import BooksApp from './BooksApp';

const App = () => (
  <MuiThemeProvider>
    <BooksApp/>
  </MuiThemeProvider>
);

injectTapEventPlugin();

export default App;
