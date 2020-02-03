import { createActions } from 'redux-actions';

import { ActionTypes } from '../constants';

export const {
  getLeagueTable,
  saveLeagueTable,
} = createActions({
  [ActionTypes.GET_LEAGUE_TABLE]: leagueId => leagueId,
  [ActionTypes.SAVE_LEAGUE_TABLE]: payload => payload,
});
