import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container, Paper, Typography } from '@mui/material';
import { store } from './store/store';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm" sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', mt: 2 }}>
            <Typography sx={{fontWeight: "bold"}} >BOTTED-Chat APP MUI</Typography>
            <Paper elevation={3} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <ChatWindow />
              <MessageInput />
            </Paper>
          </Box>
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
