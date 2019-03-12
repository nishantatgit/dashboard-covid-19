import { makeActionCreator } from '../utilities/makeActionCreator';

export const SET_INDEX = 'SET_INDEX';
export const setIndex = makeActionCreator(SET_INDEX,'payload');