// @flow
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getLeagueTable as getLeagueTableAction } from '../actions/leagueTable';
import { leagueTableSelector } from '../selectors/leagueTableSelector';

type Props = {
  leagueId: Number,
  leagueTable: Object,
  getLeagueTable: Function,
}

const League = ({ leagueId, leagueTable, getLeagueTable }: Props) => {
  if (typeof window !== 'undefined') {
    useEffect(() => { getLeagueTable({ leagueId }); }, []);
  }

  return (
    <div>
      {leagueTable.api.standings[0].map(team => (
        <div key={team.rank}>{ team.teamName }</div>
      ))}
    </div>
  );
};

export default connect(leagueTableSelector, { getLeagueTable: getLeagueTableAction })(League);
