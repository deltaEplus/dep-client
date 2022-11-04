export const IMG = 'PREV';

export const setIMG = (img) => (dispatch) => {
  dispatch({
    type: IMG,
    payload: img
  });
};
