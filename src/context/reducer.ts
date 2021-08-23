export default (state: any, action: any) => {
  switch (action.type) {
    case "REMOVE_USER":
      return {
        users: state.users.filter((user: any) => user.id !== action.payload),
      };

    case "ADD_USER":
      return {
        users: [action.payload, ...state.users],
      };

    case "EDIT_USER":
      const updatedUser = action.payload;
      const updateUsers = state.users.map((user: any) =>
        user.id === updatedUser.id ? updatedUser : user
      );
      return {
        users: updateUsers,
      };

    default:
      return state;
  }
};
