export interface filtersType {
  category: string | undefined;
  price: string | undefined;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginResponseData {
  token: string;
}

export interface singupFormData {
  name: string;
  email: string;
  password: string;
}

export interface commonCreationResponseData {
  message: string;
}

export interface addPetState {
  category: string;
  breed: string;
  imageUrl: string;
  description: string;
  price: number;
}

export type addPetAction =
  | { type: "SET_CATEGORY"; payload: string }
  | { type: "SET_BREED"; payload: string }
  | { type: "SET_IMAGE_URL"; payload: string }
  | { type: "SET_DESCRIPTION"; payload: string }
  | { type: "SET_PRICE"; payload: number };


  