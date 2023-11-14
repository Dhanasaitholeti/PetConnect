const hostname = "http://localhost:8000";

export const urls = {
  login: `${hostname}/user/login`, //
  signup: `${hostname}/user/signup`, //
  starpet: `${hostname}/user/starit`, //
  Enquire: `${hostname}/user/createchat`,
  favourites: `${hostname}/user/favourites`,
  getuser: `${hostname}/user/getuser`,
  getPets: `${hostname}/pet/`,
  addPet: `${hostname}/pet/add`,
  updatePet: `${hostname}/pet/update`, //add id at last
  deletePet: `${hostname}/pet/rm`, //add id at last
};

export const socketUrls = {
  connectionUrl: "http://localhost:8000/",
  channels: {
    newMsg: "newmessage",
    initData: "initialData",
    sendMsg: "sendmessage",
    createChat: "createNewChat",
  },
};
