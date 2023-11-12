export interface messageType {
  id: string;
  content: string;
  senderId: string;
  chatId: string;
  sentTime: string;
}
export interface chatsusers {
  id: string;
  Partner: string;
}

export type individualChat = Record<string, messageType[]>;

export interface chatStateType {
  list: chatsusers[] | null;
  chats: individualChat[] | null;
  error: boolean;
}
