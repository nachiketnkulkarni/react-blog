export const SetToken = (token) => {
  return {
    type: "ADD_TOKEN",
    payload: {
      token,
    },
  };
};

// export const DeleteToken = () => {
//   return {
//     type: "DELETE_TOKEN",
//   };
// };
