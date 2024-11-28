import { FC, memo } from "react";
import { ChatboxProps } from "./Chatbox.type";

const ChatboxView: FC<ChatboxProps> = ({ title, type, icon, centered }) => (
    <div className={`animate__animated animate__fadeIn duration-500 chatbox ${type === 'Primary' ? 'chatbox-primary' : type === 'Success' ? 'chatbox-success' : type === 'White' ? 'chatbox-white' : ''}`}>
        <div className="chatbox-body">
            {icon && (
                <div className={`${type === 'Primary' ? 'chatbox-icon-primary' : type === 'Success' ? 'chatbox-icon-success' : type === 'White' ? 'chatbox-icon-white' : ''}`}>
                    {icon}
                </div>
            )}
            <p>{title}</p>
        </div>
        <div className={`${centered ? 'chatbox-triangle-center' : 'chatbox-triangle'}`}></div>
    </div>
);

export default memo(ChatboxView);