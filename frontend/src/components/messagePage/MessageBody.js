import { useState } from "react";
import EmptyMessage from "./EmptyMessage";
import Message from "./Message";
import { Button } from "@mui/material";

const MessageBody = props => {

    const [nothing, setNothing] = useState(false);

    const [messages, setMessages] = useState([]);

    function updateMessages() {
        fetch("http://localhost:9000/spotify/messages?user=" + "K5icETWXzFDdLp0WlqqR" + "&?messenger=" + "NGCT83rHVoAMibfX7x8V")
        .then((res) => res.json())
        .then((text) => {
            if (text.result.length === 0) {
                setNothing(true);
              }
            setMessages(text.result);
        })
        .catch((err) => console.log(err))
      };

	return (
		<div>
            {nothing && <EmptyMessage/>}
            {messages.map((message) => (
                  <Message
                    messages={message.content}
                    user={message.user}
                  />
                ))}
                <Button onClick={updateMessages}>Click me</Button>
        </div>
	);
};

export default MessageBody;