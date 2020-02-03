import { all, fork } from 'redux-saga/effects';

import leagueTableSaga from './leagueTableSaga';

export default function* () {
  yield all([
    fork(leagueTableSaga),
  ]);
}
