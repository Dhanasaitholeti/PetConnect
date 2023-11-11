const hostname = "http://localhost:8000";

export const urls = {
  login: `${hostname}/user/login`,
  signup: `${hostname}/user/signup`,
  getPets: `${hostname}/pet/`,
  addPet: `${hostname}/pet/add`,
  updatePet: `${hostname}/pet/update`, //add id at last
  deletePet: `${hostname}/pet/rm`, //add id at last
};
