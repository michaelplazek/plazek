export const state = {
  theme: "green",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "changeTheme":
      return {
        ...state,
        theme: action.theme,
      };

    default:
      return state;
  }
};
