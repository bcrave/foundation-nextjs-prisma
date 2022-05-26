import { validateEmail } from "../validators";

export const editProfileInitialState = {
  firstName: {
    isError: false,
    input: "",
  },
  lastName: {
    isError: false,
    input: "",
  },
  email: {
    isError: false,
    input: "",
  },
  phoneNumber: {
    isError: false,
    input: "",
  },
};

export const editProfileFormReducer = (state, { type, payload }) => {
  switch (type) {
    case "first-name":
      return {
        ...state,
        firstName: payload,
      };
    case "last-name":
      return {
        ...state,
        lastName: payload,
      };
    case "email":
      return {
        ...state,
        email: {
          ...payload,
          isError: !validateEmail(payload.input) && payload.input !== "",
        },
      };
    case "phone":
      return {
        ...state,
        phoneNumber: payload,
      };
  }
};
