import {
  SELECT_USERNAME,
  CHANGE_USERNAME,
} from './constants';

export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name,
  };
}

export function selectUserName(id) {
  return {
    type: SELECT_USERNAME,
    id,
  };
}