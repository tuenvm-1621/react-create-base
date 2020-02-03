import { handleActions } from 'redux-actions';

import { saveLeagueTable } from '../actions/leagueTable';

export default handleActions({
  [saveLeagueTable]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
}, {});
