export interface filtersType {
  category: string | undefined;
  price: string | undefined;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginResponseData {
  res: {
    data: {
      token: string;
    };
  };
}

export interface singupFormData {
  name: string;
  email: string;
  password: string;
}

export interface signupResponseData {
  res: {
    data: {
      message: string;
    };
  };
}
