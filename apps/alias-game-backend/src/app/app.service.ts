import { Injectable } from '@nestjs/common';
import { Session, Team } from '@spark-fountain/alias-game';

@Injectable()
export class AppService {
  sessions: Session[];

  /**
   * Shuffles array in place.
   */
  shuffle(array: unknown[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  /**
   * Check if a user already exists.
   */
  userExists(user: string) {
    // $sql = "SELECT id FROM `player` WHERE `name`='$user'";
    // $result = $db->query($sql);
    // return $result->num_rows > 0;
  }

  playerInTeam($session, $team, $player): any {
    // $sql = "SELECT id FROM `player` WHERE `session`='$session' AND `team`='$team' AND `name`='$player'";
    // $result = $db->query($sql);
    // return $result->num_rows > 0;
  }

  /**
   * Creates a new session.
   */
  createSession(session: Session) {
    const activeTeam: boolean = Math.random() > 0.5;

    session.teams[0].active = activeTeam ? true : false;
    session.teams[1].active = activeTeam ? false : true;

    // TODO: refactor or remove
    // if (
    //   !this.playerInTeam(session.name, session.teams[0].name, session.creator)
    // ) {
    //   this.createPlayer(session.creator, session.name, session.teams[0].name);
    // }

    this.createSessionColors(session);

    this.sessions.push(session);
  }

  /**
   * Creates random colors for a session.
   */
  createSessionColors(session: Session) {
    let teamA: number;
    let teamB: number;
    let neutral: number;
    let black: number;
    const activeTeam: boolean = session.teams[0].active;

    switch (session.horizontal * session.vertical) {
      case 9:
        teamA = activeTeam ? 4 : 3;
        teamB = 7 - teamA;
        neutral = 1;
        black = 1;
        break;
      case 12:
        teamA = activeTeam ? 5 : 4;
        teamB = 9 - teamA;
        neutral = 2;
        black = 1;
        break;
      case 16:
        teamA = activeTeam ? 6 : 5;
        teamB = 11 - teamA;
        neutral = 4;
        black = 1;
        break;
      case 20:
        teamA = activeTeam ? 7 : 6;
        teamB = 13 - teamA;
        neutral = 6;
        black = 1;
        break;
      case 25:
        teamA = activeTeam ? 9 : 8;
        teamB = 17 - teamA;
        neutral = 7;
        black = 1;
        break;
      case 30:
        teamA = activeTeam ? 10 : 9;
        teamB = 19 - teamA;
        neutral = 9;
        black = 2;
        break;
      case 36:
        teamA = activeTeam ? 12 : 11;
        teamB = 23 - teamA;
        neutral = 10;
        black = 3;
        break;
    }

    let colors = [];
    for (let i = 0; i < teamA; i++) {
      colors.push(session.teams[0].color);
    }
    for (let i = 0; i < teamB; i++) {
      colors.push(session.teams[1].color);
    }
    for (let i = 0; i < neutral; i++) {
      colors.push('#ffcc06');
    }
    for (let i = 0; i < black; i++) {
      colors.push('#222222');
    }

    colors = this.shuffle(colors);
  }

  /**
   * Creates a new user.
   */
  createPlayer($name, $session, $team) {
    // $active = $active ? 'true' : 'false';
    // $sql = "INSERT INTO `player` (`name`, `session`, `team`) VALUES ('$name', '$session', '$team')";
    // $db->query($sql);
  }

  /**
   * Get all players of a certain team.
   */
  getTeamPlayers($session, $team) {
    // $sql = "SELECT `name`, `active`, `selectedX`, `selectedY` FROM `player` WHERE `session` = '$session' AND `team` = '$team'";
    // $result = $db->query($sql);
    // $players = array();
    // while($row = $result->fetch_assoc()) {
    //   array_push($players, array(
    //     'name' => $row['name'],
    //     'active' => $row['active'] ? true : false,
    //     'selectedX' => $row['selectedX'],
    //     'selectedY' => $row['selectedY']
    //   ));
    // }
    // return $players;
  }

  /**
   * Gets all sessions from the database that could be joined.
   */
  getAllSessions() {
    // $sql = 'SELECT `name`, `creator` FROM `session`';
    // $result = $db->query($sql);
    // $sessions = array();
    // while($row = $result->fetch_assoc()) {
    //   array_push($sessions, array(
    //     'name' => $row['name'],
    //     'creator' => $row['creator']
    //   ));
    // }
    // return $sessions;
  }

  /**
   * Get a certain session by name from the database.
   */
  getSession($session) {
    // $sql = "SELECT `name`, `creator`, `horizontal`, `vertical`, `theme`, `started` FROM `session` WHERE `name` = '$session'";
    // $result = $db->query($sql);
    // while($row = $result->fetch_assoc()) {
    //   $sessions = array(
    //     'name' => $row['name'],
    //     'creator' => $row['creator'],
    //     'horizontal' => $row['horizontal'],
    //     'vertical' => $row['vertical'],
    //     'theme' => $row['theme'],
    //     'started' => $row['started']
    //   );
    // }
    // return $sessions;
  }

  /**
   * Get all teams (2) that belong to a session.
   */
  getSessionTeams($session) {
    // $sql = "SELECT `name`, `color`, `active` FROM `team` WHERE `session` = '$session'";
    // $result = $db->query($sql);
    // $teams = array();
    // while($row = $result->fetch_assoc()) {
    //   array_push($teams, array(
    //     'name' => $row['name'],
    //     'color' => $row['color'],
    //     'active' => $row['active'] ? true : false
    //   ));
    // }
    // return $teams;
  }

  /**
   * Get all colors that belong to a session.
   */
  getSessionColors($session) {
    // $sql = "SELECT `x`, `y`, `color`, `uncovered` FROM `session-colors` WHERE `session` = '$session' ORDER BY y ASC, x ASC";
    // $result = $db->query($sql);
    // $colors = array();
    // while($row = $result->fetch_assoc()) {
    //   array_push($colors, array(
    //     'x' => $row['x'],
    //     'y' => $row['y'],
    //     'color' => $row['color'],
    //     'uncovered' => $row['uncovered']
    //   ));
    // }
    // return $colors;
  }

  /**
   * Get all cards of a session.
   */
  getSessionCards($session) {
    // $sql = "SELECT `horizontal`, `vertical`, `terms` FROM `session` WHERE `name`='$session'";
    // $result = $db->query($sql);
    // while($row = $result->fetch_assoc()) {
    //   $horizontal = $row['horizontal'];
    //   $vertical = $row['vertical'];
    //   $termIndexes = json_decode($row['terms']);
    // }
    // $colors = getSessionColors($session);
    // $cardAmount = $horizontal * $vertical;
    // $sql = "SELECT `id`, `word` FROM `term` WHERE `id` IN (";
    // for (i=0; i<$cardAmount; i++) {
    //   $sql .= $termIndexes[i];
    //   if(i<$cardAmount-1) {
    //     $sql .= ',';
    //   }
    // }
    // $sql .= ')';
    // $result = $db->query($sql);
    // $terms = array();
    // while($row = $result->fetch_assoc()) {
    //   $terms[$row['id']] = $row['word'];
    // }
    // // now sort the terms
    // $cards = array();
    // $rowIndex = 0;
    // for($j=0; $j<$cardAmount; $j++) {
    //   array_push($cards, array(
    //     'x' => $rowIndex % $horizontal,
    //     'y' => intdiv($rowIndex, $horizontal),
    //     'word' => $terms[$termIndexes[$j]],
    //     'color' => $colors[$rowIndex]['color'],
    //     'uncovered' => $colors[$rowIndex]['uncovered'] ? true : false
    //   ));
    //   $rowIndex++;
    // }
    // return $cards;
  }

  selectCard($session, $x, $y) {
    // $sql = "UPDATE `session-colors` SET `uncovered`=1 WHERE `session`='$session' AND `x`='$x' AND `y`='$y'";
    // $db->query($sql);
  }

  requestDescription($session, $team, $word, $amount) {
    // $sql = "INSERT INTO `description` (`session`, `team`, `word`, `amount`, `accepted`) VALUES ('$session', '$team', '$word', $amount, -1)";
    // $db->query($sql);
  }

  getDescription($session) {
    // $sql = "SELECT `word`, `amount`, `accepted` FROM `description` WHERE `session`='$session' ORDER BY `id` DESC LIMIT 1";
    // $result = $db->query($sql);
    // if($result->num_rows > 0) {
    //   while($row = $result->fetch_assoc()) {
    //     return array(
    //       'word' => $row['word'],
    //       'amount' => $row['amount'],
    //       'accepted' => $row['accepted']
    //     );
    //   }
    // } else {
    //   return array(
    //     'word' => '',
    //     'amount' => 0,
    //     'accepted' => -1
    //   );
    // }
  }

  acceptDescription($session) {
    // $sql = "UPDATE `description` SET `accepted`=1 WHERE `session`='$session'";
    // $result = $db->query($sql);
  }

  denyDescription($session) {
    // $sql = "UPDATE `description` SET `accepted`=0 WHERE `session`='$session'";
    // $result = $db->query($sql);
  }

  fetchTerms($session) {
    // $sql = "SELECT `id`, `word`, `amount` FROM `term` WHERE `session` = '$session' ORDER BY `id` ASC";
    // $result = $db->query($sql);
    // $terms = array();
    // while($row = $result->fetch_assoc()) {
    //   array_push($terms, array(
    //     'id' => $row['id'],
    //     'word' => $row['word'],
    //     'amount' => $row['amount']
    //   ));
    // }
    // return $terms;
  }

  exchangeTerm($session, $x, $y) {
    // $sql = "SELECT `horizontal`, `vertical`, `terms` FROM `session` WHERE `name` = '$session'";
    // $result = $db->query($sql);
    // while($row = $result->fetch_assoc()) {
    //   $horizontal = $row['horizontal'];
    //   $vertical = $row['vertical'];
    //   $terms = json_decode($row['terms']);
    // }
    // $exchangeIndex = $y * $horizontal + $x;
    // $exchangeTerm = $terms[$exchangeIndex];
    // unset($terms[$exchangeIndex]);
    // array_push($terms, $exchangeTerm);
    // $terms = array_values($terms);
    // $sql = "UPDATE `session` SET `terms`='".json_encode($terms)."' WHERE `name`='$session'";
    // $db->query($sql);
  }

  fetchHistory($session) {
    // $sql = "SELECT `team`, `description`, `amount`, `teamA`, `teamB`, `neutral`, `black` FROM `history` WHERE `session` = '$session'";
    // $result = $db->query($sql);
    // $history = array();
    // while($row = $result->fetch_assoc()) {
    //   array_push($history, array(
    //     'team' => $row['team'],
    //     'description' => $row['description'],
    //     'amount' => $row['amount'],
    //     'teamA' => $row['teamA'],
    //     'teamB' => $row['teamB'],
    //     'neutral' => $row['neutral'],
    //     'black' => $row['black']
    //   ));
    // }
    // return $history;
  }

  addHistoryEvent(
    $session,
    $team,
    $description,
    $amount,
    teamA,
    teamB,
    neutral,
    black
  ) {
    // $sql = "INSERT INTO `history` (`session`, `team`, `description`, `amount`, `teamA`, `teamB`, `neutral`, `black`) VALUES ('$session', '$team', '$description', $amount, teamA, teamB, neutral, black)";
    // $db->query($sql);
  }

  fetchSession($sessionName) {
    // $session = getSession($sessionName);
    // $cards = getSessionCards($sessionName);
    // $remainingCards = array();
    // foreach($cards as $card) {
    //   if(!array_key_exists($card['color'], $remainingCards)) {
    //     $remainingCards[$card['color']] = 0;
    //   }
    //   if(!$card['uncovered']) {
    //     $remainingCards[$card['color']]++;
    //   }
    // }
    // $teams = getSessionTeams($sessionName);
    // $finalTeams = array();
    // foreach($teams as $team) {
    //   $players = getTeamPlayers($session['name'], $team['name']);
    //   array_push($finalTeams, array(
    //     'name' => $team['name'],
    //     'color' => $team['color'],
    //     'active' => $team['active'],
    //     'players' => $players,
    //     'remainingCards' => $remainingCards[$team['color']]
    //   ));
    // }
    // $description = getDescription($sessionName);
    // $finalDescription = array(
    //   'term' => $description['word'],
    //   'amount' => $description['amount'],
    //   'accepted' => $description['accepted'] == 1 ? true : false,
    //   'denied' => $description['accepted'] == 0 ? true : false
    // );
    // $sessionData = array(
    //   'name' => $sessionName,
    //   'creator' => $session['creator'],
    //   'horizontal' => $session['horizontal'],
    //   'vertical' => $session['vertical'],
    //   'theme' => $session['theme'],
    //   'teams' => $finalTeams,
    //   'cards' => $cards,
    //   'started' => $session['started'] ? true : false,
    //   'description' => $finalDescription
    // );
    // return $sessionData;
  }

  startSession($session) {
    // $sql = "UPDATE `session` SET `started`=1 WHERE `name`='$session'";
    // $db->query($sql);
  }

  requestActivePlayer($session, $team, $player) {
    // $sql = "UPDATE `player` SET `active`=1 WHERE `session`='$session' AND `team`='$team' AND `name`='$player'";
    // $db->query($sql);
  }

  resetSession($session) {
    // // check if any player already reset the session
    // $sql = "SELECT `id` FROM `player` WHERE `session`='$session' AND `active`=1";
    // $result = $db->query($sql);
    // if($result->num_rows === 2) {
    //   // replace terms and reset started
    //   $sql = "SELECT `horizontal`, `vertical`, `terms` FROM `session` WHERE `name`='$session'";
    //   $result = $db->query($sql);
    //   this.checkForDatabaseError();
    //   while($row = $result->fetch_assoc()) {
    //     $terms = json_decode($row['terms']);
    //     $horizontal = $row['horizontal'];
    //     $vertical = $row['vertical'];
    //   }
    //   for(i=0; i<$horizontal*$vertical; i++) {
    //     array_shift($terms);
    //   }
    //   $sql = "UPDATE `session` SET `terms`='".json_encode($terms)."', `started`=0 WHERE `name`='$session'";
    //   $db->query($sql);
    //   this.checkForDatabaseError();
    //   // delete old session colors
    //   $sql = "DELETE FROM `session-colors` WHERE `session`='$session'";
    //   $db->query($sql);
    //   this.checkForDatabaseError();
    //   // create new teams with session colors
    //   $sql = "SELECT `name`, `color` FROM `team` WHERE `session`='$session'";
    //   $result = $db->query($sql);
    //   this.checkForDatabaseError();
    //   $teams = array();
    //   while($row = $result->fetch_assoc()) {
    //     array_push($teams, array(
    //       'name' => $row['name'],
    //       'color' => $row['color'],
    //     ));
    //   }
    //   // first, delete old team rows
    //   $sql = "DELETE FROM `team` WHERE `session`='$session'";
    //   $db->query($sql);
    //   this.checkForDatabaseError();
    //   // now, re-create them
    //   activeTeam = rand(0, 1) == 1;
    //   createTeam($session, $teams[0]['name'], $teams[0]['color'], activeTeam ? true : false);
    //   createTeam($session, $teams[1]['name'], $teams[1]['color'], activeTeam ? false : true);
    //   createSessionColors($session, $horizontal, $vertical, $teams[0]['color'], $teams[1]['color'], activeTeam);
    //   // unset active players
    //   $sql = "UPDATE `player` SET `active`=0 WHERE `session`='$session'";
    //   $db->query($sql);
    //   this.checkForDatabaseError();
    // }
  }

  nextRound($session) {
    // $sql = "DELETE FROM `description` WHERE 1";
    // $db->query($sql);
    // $sql = "UPDATE `team` SET `active`=-1 WHERE `active`='1' AND `session`='$session'";
    // $db->query($sql);
    // $sql = "UPDATE `team` SET `active`=1 WHERE `active`=0 AND `session`='$session'";
    // $db->query($sql);
    // $sql = "UPDATE `team` SET `active`=0 WHERE `active`=-1 AND `session`='$session'";
    // $db->query($sql);
  }
}
