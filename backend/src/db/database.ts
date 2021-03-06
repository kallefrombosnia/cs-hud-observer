import lowdb from 'lowdb';
import FileAsync from 'lowdb/adapters/FileSync';

interface Teams {
    id: string;
    team_name: string;
    team_short_name: string;
    team_logo_name: string;
    team_description: string;
    team_country_code: string;
}

interface Players {
    id: string;
    player_name: string;
    player_nickname: string;
    player_lastname: string;
    player_countrycode: string;
    player_steamid: string;
    player_teamid: string;
    player_age: string;
    player_description: string;
}

interface Matches {
    id: string;
    team_one: string;
    team_two: string;
    status: 'ongoing' | 'finished' | 'live';
    match_type: string;
    maps_selected: string[];
    team_one_players: string[];
    team_two_players: string[];
}

interface Error {
    error_name: string;
    error_message: NodeJS.ErrnoException | null;
    error_custom: string;
}
  
interface DatabaseType {
    teams: Array<Teams>;
    players: Array<Players>;
    matches: Array<Matches>;
    error_list: Array<Error>;
}

const adapter = new FileAsync<DatabaseType>(__dirname + '/db.json', {
    defaultValue: {
        teams: [],
        players: [],
        matches: [],
        error_list: []
    }
});

const db = lowdb(adapter);
 
export default db;


