import './ChatComponent.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBody from './ChatBody/ChatBody';
import ChatFooter from './ChatFooter/ChatFooter';

export default function ChatComponent() {
  return (
    <div className={`chat-component-container`}>
      <ChatHeader />

      <ChatBody />

      <ChatFooter />
    </div>
  )
}
