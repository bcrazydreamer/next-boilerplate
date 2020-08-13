import debounce from 'lodash/debounce';
import { isFuction } from '../function/common';

const defaultDelay = 500; //in milisecond

export default (apiFxn, delay = defaultDelay) => {
  if (!isFuction(apiFxn)) {
    return null;
  }
  if (isNaN(delay) || delay === null) {
    delay = defaultDelay;
  }
  return debounce(apiFxn, delay);
}