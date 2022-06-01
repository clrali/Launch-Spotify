import { Card } from "@mui/material";

function Message(props) {

  return (
    <Card
    >
      <h3>{props.user}:</h3>
      <p>{props.messages}</p>
    </Card>
  );
}

export default Message;