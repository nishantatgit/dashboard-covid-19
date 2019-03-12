import { combineReducers } from 'redux';

import cardListReducer from '../components/organisms/CardList/CardList.reducer';
import hotelIndexReducer from './hotelIndexReducer';

export default combineReducers(
  {
    hotels: cardListReducer,
    hotelDisplayIndex: hotelIndexReducer
  }
);