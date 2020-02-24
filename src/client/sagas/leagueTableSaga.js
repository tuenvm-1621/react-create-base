import { all, takeLatest, put, call } from 'redux-saga/effects';

import { getLeagueTable, saveLeagueTable } from '../actions/leagueTable';
import { LeagueTableApi } from '../services/leagueTableApi';

function* getLeagueTableSaga(action) {
  try {
    const response = yield call([LeagueTableApi, LeagueTableApi.getLeagueTable], action.payload);
    yield put(saveLeagueTable(response.data));
  } catch (e) {
    // dothing
  }
}

export default function* () {
  yield all([
    takeLatest(getLeagueTable, getLeagueTableSaga),
  ]);
}
