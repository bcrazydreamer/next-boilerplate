export const startLoader = () => dispatch => {
  return dispatch({ type: "START_LOADER" });
}

export const stopLoader = () => dispatch =>{
  return dispatch({ type: "STOP_LOADER" });
}

export const startPageLoader = () => dispatch => {
  return dispatch({ type: "START_PAGE_LOADER" });
}

export const stopPageLoader = () => dispatch =>{
  return dispatch({ type: "STOP_PAGE_LOADER" });
}