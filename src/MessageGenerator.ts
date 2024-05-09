export enum ChatLocation {
    Global = "global", Page = "page"
}

export interface ChatMessage {
    kind: "chat"
    /**
     * Sender's chat id.
     */
    id: number;
    /**
     * Sender's nickname.
     */
    nickname: string;
    /**
     * Sender's username (only if {@link registered} is true)
     */
    realUsername?: string;
    /**
     * Whether the sender is registered or not.
     */
    registered: boolean;
    /**
     * Whether the sender is an OP or not.
     */
    op: boolean;
    /**
     * Whether the sender is an admin or not.
     */
    admin: boolean;
    /**
     * Whether the sender is staff or not.
     */
    staff: boolean;
    /**
     * The location of the message
     */
    location: ChatLocation;
    /**
     * The message text.
     */
    message: string;
    /**
     * Sender's chat color.
     */
    color: string;
    /**
     * The date and time on which the message was sent.
     * Unix millis
     */
    date: number;
    /**
     * Sender's rank name, if any.
     */
    rankName?: string;
    /**
     * Sender's rank color, if any.
     */
    rankColor?: string;
    /**
     * Whether it was a private message, and who received it.
     */
    privateMessage?: "to_me" | "from_me";

    mock: true
}

export class MessageGenerator {
    constructor() {

    }

    private makeLocation(): ChatLocation {
        if (Math.random() > 0.5) {
            return ChatLocation.Global;
        }
        return ChatLocation.Page;
    }

    generateMessage(): ChatMessage {
        return {
            "kind": "chat",
            "nickname": "Mock Message",
            "realUsername": "mockmessage",
            "id": 69,
            "message": "h",
            "registered": true,
            "location": this.makeLocation(),
            "op": false,
            "admin": false,
            "staff": false,
            "color": "#008ec4",
            "date": Date.now(),
            "mock": true
        }
    }
}

