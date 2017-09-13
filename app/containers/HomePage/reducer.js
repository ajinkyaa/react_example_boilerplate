import { fromJS, List, update } from 'immutable';

import {
  SELECT_USERNAME,
  CHANGE_USERNAME,
} from './constants';

const arr = [{
    "id": 1,
    "text": "Tabbitha",
    "selected": false
  }, {
    "id": 2,
    "text": "Rickie",
    "selected": false
  }, {
    "id": 3,
    "text": "Jacquelin",
    "selected": false
  }, {
    "id": 4,
    "text": "Dorri",
    "selected": false
  }, {
    "id": 5,
    "text": "Brigham",
    "selected": false
  }, {
    "id": 6,
    "text": "Ajinkya",
    "selected": false
  }, {
    "id": 7,
    "text": "Hadley",
    "selected": false
  }, {
    "id": 8,
    "text": "Orland",
    "selected": false
  }, {
    "id": 9,
    "text": "Fifine",
    "selected": false
  }, {
    "id": 10,
    "text": "Trudie",
    "selected": false
  }, {
    "id": 11,
    "text": "Henderson",
    "selected": false
  }, {
    "id": 12,
    "text": "Korrie",
    "selected": false
  }, {
    "id": 13,
    "text": "Letti",
    "selected": false
  }, {
    "id": 14,
    "text": "Carny",
    "selected": false
  }, {
    "id": 15,
    "text": "Sol",
    "selected": false
  }, {
    "id": 16,
    "text": "Zaria",
    "selected": false
  }, {
    "id": 17,
    "text": "Flss",
    "selected": false
  }, {
    "id": 18,
    "text": "Preston",
    "selected": false
  }, {
    "id": 19,
    "text": "Norman",
    "selected": false
  }, {
    "id": 20,
    "text": "Jermain",
    "selected": false
  }]
  
const initialState = List(arr);

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_USERNAME:
      return state.map(item => 
        item.id  === action.id ? 
        {...item, selected: true } : 
        {...item, selected: false }
      )
    case CHANGE_USERNAME:
      return state.map(item => 
        item.selected ? 
        {...item, text: action.name } : item
      )
    default:
      return state;
  }
}

