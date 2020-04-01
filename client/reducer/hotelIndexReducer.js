import { SET_INDEX } from '../actions/hotelIndex.action';
const hotelIndexReducer  = (state = [], action) =>{
  switch(action.type){
    case SET_INDEX : 
      return action.payload.slice();
    default: 
      return state
  }
}

export default hotelIndexReducer;