import './ChatbotWrapper.scss';
import ChatComponent from './ChatComponent/ChatComponent';
import ChatbotProvider from '../../provider/chatBotProvider';

export default function ChatBotWrapper() {
  return (
    <div className={`chatbot-wrapper`}>
      <div className={`chatbot-container`}>
          <ChatbotProvider>
            <ChatComponent />
          </ChatbotProvider>
      </div>

      <div className={`signature`}>Create by Amit Jaggi</div>
    </div>
  );
};
