import { FC, memo } from "react";
import { ChatboxProps } from "./Chatbox.type";

const ChatboxView: FC<ChatboxProps> = ({ title, type }) => (
    <div className={`chatbox ${type === 'Primary' ? 'chatbox-primary' : type === 'Success' ? 'chatbox-success' : type === 'White' ? 'chatbox-white' : ''}`}>
        <p>{title}</p>
        <div className="chatbox-triangle" />
    </div>
);

export default memo(ChatboxView);