import * as ws from "ws";
import { MessageGenerator } from "./MessageGenerator";

export class MockOWOTChatServer {
    wsServer: ws.Server;
    generator: MessageGenerator

    constructor() {
        this.wsServer = new ws.Server({ host: "localhost", port: 20348 });
        this.generator = new MessageGenerator();

        this.wsServer.on("connection", (s) => {
            setInterval(() => {
                s.send(JSON.stringify(this.generator.generateMessage()))
            }, 10);
        })
    }
}