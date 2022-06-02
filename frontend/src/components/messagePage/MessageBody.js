import { useState } from "react";
import EmptyMessage from "./EmptyMessage";
import Message from "./Message";
import { Button } from "@mui/material";

const MessageBody = props => {

	return (
		<div>
            {props.nothing && <EmptyMessage/>}
            {props.messages.map((message) => (
                  <Message
                    messages={message.content}
                    user={message.user}
                    key={message.user}
                  />
                ))}
                
        </div>
	);
};

export default MessageBody;