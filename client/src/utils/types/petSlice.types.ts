import { PetType } from "./index";

export interface petStateType {
  pets: PetType[] | null;
  error: boolean;
}
