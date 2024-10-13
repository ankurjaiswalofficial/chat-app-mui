import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ChatMessage from './ChatMessage';

const ChatWindow: React.FC = () => {
  const messages = useSelector((state: RootState) => state.chat.messages);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <Box sx={{ height: 'calc(100vh - 150px)', overflowY: 'auto', p: 2 }}>
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      <div ref={messagesEndRef} />
    </Box>
  );
};

export default ChatWindow;