import { SET_CARD_LIST } from './CardList.actions';
export default function cardListReducer(state = [], action){
  switch(action.type){
    case SET_CARD_LIST: 
      state = action.payload.slice();
      return state;
    default: 
      return state;
  }
}