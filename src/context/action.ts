export const removeUser = (id: Number) => ({
  type: "REMOVE_USER",
  payload: id,
});

export const addUser = (user: any) => ({
  type: "ADD_USER",
  payload: user,
});

export const editUser = (user: any) => ({
  type: "EDIT_USER",
  payload: user,
});
