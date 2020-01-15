// @flow
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getLeagueTable } from '../actions/leagueTable';
import { leagueTableSelector } from '../selectors/leagueTableSelector';

type Props = {
  leagueId: Number,
  leagueTable: Object,
}

const League = ({ leagueId, leagueTable }: Props) => {
  useEffect(() => getLeagueTable(leagueId));
  return (
    <div>{ leagueTable }</div>
  );
};

export default compose(
  connect(leagueTableSelector, { getLeagueTable }),
)(League);
