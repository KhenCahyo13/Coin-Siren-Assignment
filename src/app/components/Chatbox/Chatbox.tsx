import { FC, memo } from "react";
import ChatboxView from "./Chatbox.view";
import { ChatboxProps } from "./Chatbox.type";

const Chatbox: FC<ChatboxProps> = ({ title, type }) => {
    return <ChatboxView
        title={title}
        type={type}
    />;
};

export default memo(Chatbox);