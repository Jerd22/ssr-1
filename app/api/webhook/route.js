const request = require("request");

export default function Line(req, res) {
  if (req.body.events.length === 0) {
    res.status(200).json({});
    //reply({})
    return;
  }

  let events = req.body.events[0];
  let reply_token = events.replyToken;
  var userId = events.source.userId;

  if (events.type === "message") {
    if (
      events.message.text === "text" &&
      userId === "Ud645daddcd7eb6babbf54df072eaacb2"
    ) {
      reply(reply_token, events.message.text, "text");
    }
  }
}

async function reply(reply_token, msg, typeReply) {
  let headers = {
    "Contant-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CHANNAL_ACCESS_TOKEN}`,
  };

  let body = JSON.stringify({
    replyToken: reply_token,
    message: Array.isArray()
      ? msg.map((message) => ({ type: "text", text: message }))
      : [{ type: "text", text: msg }],
  });

  request.post({
    uri: `${process.env.NEXT_PUBLIC_MESSAGE_URI}`,
    headers: headers,
    body: body,
  });
}
