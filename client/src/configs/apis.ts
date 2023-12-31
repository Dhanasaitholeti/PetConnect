const hostname = import.meta.env.VITE_SERVER_HOST;

export const urls = {
  login: `${hostname}/user/login`, //
  signup: `${hostname}/user/signup`, //
  starpet: `${hostname}/user/starit`, //
  Enquire: `${hostname}/user/createchat`,
  favourites: `${hostname}/user/favourites`,
  getuser: `${hostname}/user/getuser`,
  getPets: `${hostname}/pet/`,
  getIndividualPet: `${hostname}/pet/`, //add id
  addPet: `${hostname}/pet/add`,
  updatePet: `${hostname}/pet/update`, //add id at last
  deletePet: `${hostname}/pet/rm`, //add id at last
};

export const socketUrls = {
  connectionUrl: hostname,
  channels: {
    newMsg: "newmessage",
    initData: "initialData",
    sendMsg: "sendmessage",
    createChat: "createNewChat",
  },
};
