// @flow
import V1 from './v1';

class LeagueTable extends V1 {
  getLeagueTable = (params: Object) => {
    const { leagueId } = params;
    return this.client.get(`/leagueTable/${leagueId}`);
  };
}

export const LeagueTableApi = new LeagueTable();
