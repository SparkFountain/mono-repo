import { Team } from './team';
import { Card } from './card';

export interface ActiveSession {
  name: string;
  creator: string;
  horizontal: number;
  vertical: number;
  themes: string[];
  teams: Team[];
  cards: Card[];
  started: boolean;

  // TODO: that comes to history
  description: {
    term: string;
    amount: number;
    accepted: boolean;
    denied: boolean;
  };
}
