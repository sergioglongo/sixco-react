import produce from 'immer';
import { INIT } from '../constants/reduxFormConstants';

const initialState = {
  clientData: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INIT:
      return state;
    case 'SET_CLIENT_DATA':
      return produce(state, draftState => {
        draftState.clientData = action.clientData;
      });
    default:
      return state;
  }
}
