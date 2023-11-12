export interface userType {
  id: string;
  email: string;
}

export interface userStateType {
  user: userType | null;
  error: boolean;
}
