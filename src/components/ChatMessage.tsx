import React from 'react';
import { Typography, Box } from '@mui/material';
import { format } from 'date-fns';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        mb: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: '70%',
          backgroundColor: isUser ? '#DCF8C6' : '#E0E0E0',
          borderRadius: '10px',
          padding: '10px',
        }}
      >
        <Typography variant="body1">{message.text}</Typography>
        <Typography variant="caption" sx={{ display: 'block', mt: 1, textAlign: 'right' }}>
          {format(message.timestamp, 'HH:mm')}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatMessage;