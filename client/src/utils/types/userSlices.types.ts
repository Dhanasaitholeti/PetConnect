export interface userType {
  id: string;
  name: string;
  email: string;
}

export interface userStateType {
  user: userType | null;
  error: boolean;
}
