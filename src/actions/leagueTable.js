import { createActions } from 'redux-actions';

import { ActionTypes } from '../constants';

export const {
  getLeagueTable,
  saveLeagueTable,
} = createActions({
  [ActionTypes.GET_INFO_TABLE]: payload => payload,
  [ActionTypes.SAVE_INFO_TABLE]: payload => payload,
});
