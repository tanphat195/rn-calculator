export const UPDATE_CALCULATOR = 'UPDATE_CALCULATOR';

const initialState = {
  inputs: [],
  value: '0',
  result: 0,
  operator: '',
};

export default (state = initialState, action) => {
  if (action.type === UPDATE_CALCULATOR) {
    return {
      ...state,
      ...action.payload,
    }
  }
  return state;
};