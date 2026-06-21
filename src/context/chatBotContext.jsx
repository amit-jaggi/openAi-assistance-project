import { createContext, useContext } from 'react';

export const ChatbotContext = createContext(null);

export const useChatbotContext = () => {
  const context = useContext(ChatbotContext);

  if (!context) {
    throw new Error(
      'useChatbotContext must be used within ChatbotProvider'
    );
  };

  return context;
};