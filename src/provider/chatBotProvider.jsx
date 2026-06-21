import useChatbot from '../hooks/useChatbot';
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