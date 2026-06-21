import './ChatBody.scss';
import { useChatbotContext } from '../../../../context/chatBotContext';
import BotThinking from '../../../atoms/ThinkingContainer/ThinkingContainer';
import ChatBubble from './ChatBubble/ChatBubble';
import BubbleWrapper from './BubbleWrapper/BubbleWrapper';
import useChatScroll from '../../../../hooks/useChatScroll';

export default function ChatBody() {
  const { messagesObj } = useChatbotContext();

  const scrollRef = useChatScroll(messagesObj?.messages);

  return (
    <div className={`chat-body-wrapper`}>
      <div
        className={`chat-body-container`}
        ref={scrollRef}
      >
        {
          (messagesObj?.messages || []).map(
            (message, messageIndex) => (
              <ChatBubble
                key={`chat-message-${messageIndex}`}
                messageObj={message}
              />
            )
          )
        }

        {
          messagesObj?.isFetching && (
            <BubbleWrapper sender={`bot`}>
              <BotThinking />
            </BubbleWrapper>
          )
        }
      </div>
    </div>
  );
};
