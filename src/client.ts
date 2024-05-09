import * as ws from "ws"

const sock = new ws.WebSocket("ws://localhost:20348");

sock.on("message", (d) => { console.log(d.toString()) });
