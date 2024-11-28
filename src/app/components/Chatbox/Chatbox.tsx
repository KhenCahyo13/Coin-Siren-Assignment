import { FC, memo } from 'react';
import ChatboxView from './Chatbox.view';
import { ChatboxProps } from './Chatbox.type';

const Chatbox: FC<ChatboxProps> = ({ title, type, icon, centered }) => {
  return <ChatboxView title={title} type={type} icon={icon ? icon : null} centered={centered ? true : false} />;
};

export default memo(Chatbox);
