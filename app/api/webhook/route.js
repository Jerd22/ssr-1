const request = require("request");

export async function GET() {
  return Response.json({
    message: `GET method called`,
  });
}

export async function POST(req) {
  const data = await req.json();

  if (data.events.length === 0) {
    return Response.json({ message: "Not Hook data." });
  }

  let events = data.events[0];

  let reply_token = events.replyToken;
  var userId = events.source.userId;

  if (events.type === "message") {
    if (
      events.message.type === "text" &&
      userId === "Ud645daddcd7eb6babbf54df072eaacb2"
    ) {
      reply(reply_token, events.message.text, "text");
      return Response.json({ message: "Bot Send Message true" });
    }
  }
}

async function reply(reply_token, msg, typeReply) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CHANNAL_ACCESS_TOKEN}`,
  };

  let body = JSON.stringify({
    replyToken: reply_token,
    messages: Array.isArray(msg)
      ? msg.map((message) => ({ type: "text", text: message }))
      : [{ type: "text", text: msg }],
  });

  await request.post(
    {
      uri: `${process.env.NEXT_PUBLIC_MESSAGE_URI}`,
      headers: headers,
      body: body,
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
      console.log(`Error : ${error}`);
    }
  );
}
