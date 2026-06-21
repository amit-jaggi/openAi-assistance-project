import React from 'react';
import ErrorBoundary from './errorBoundary/errorBoundary';
import ChatBotApplication from './components/Chatbot/ChatbotWrapper';

export default function App() {
  return (
    <ErrorBoundary>
      <ChatBotApplication />
    </ErrorBoundary>
  );
};
