import { createSelector } from 'reselect';

export const selector = state => state.leagueTable;

export const leagueTableSelector = state => createSelector(
  selector,
  leagueTable => ({ leagueTable: leagueTable || {} }),
)(state);
