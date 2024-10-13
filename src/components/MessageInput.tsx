import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Send } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../store/chatSlice';
import { v4 as uuidv4 } from 'uuid';

const MessageInput: React.FC = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    if (message.trim()) {
      dispatch(
        addMessage({
          id: uuidv4(),
          text: message,
          sender: 'user',
          timestamp: Date.now(),
        })
      );
      setMessage('');
      simulateBotResponse();
    }
  };

  const simulateBotResponse = () => {
    setTimeout(() => {
      dispatch(
        addMessage({
          id: uuidv4(),
          text: 'This is a simulated bot response.',
          sender: 'bot',
          timestamp: Date.now(),
        })
      );
    }, 1000);
  };

  return (
    <Box sx={{ display: 'flex', p: 2, backgroundColor: '#f5f5f5' }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSendMessage();
          }
        }}
      />
      <Button
        variant="contained"
        color="primary"
        endIcon={<Send />}
        onClick={handleSendMessage}
        sx={{ ml: 1 }}
      >
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;