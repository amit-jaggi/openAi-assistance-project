import useChatbot from '../hooks/useChatBot';
import { ChatbotContext } from '../context/chatBotContext';

export default function ChatbotProvider({
  children,
}) {
  const chatbot = useChatbot();

  return (
    <ChatbotContext.Provider value={chatbot}>
      {children}
    </ChatbotContext.Provider>
  );
}