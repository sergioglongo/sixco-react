import { INIT } from '../constants/reduxFormConstants';
import produce from 'immer';

const initialState = {
  RegisterResult:       {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INIT:
      return state;
    default:
      return state;
  }
}
