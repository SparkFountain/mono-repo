import { Team } from './team';
import { Card } from './card';
import { Theme } from '@spark-fountain/alias-game';

export interface Session {
  name: string;
  creator: string;
  horizontal: number;
  vertical: number;
  themes: Theme[];
  teams: Team[];
  cards?: Card[];
  started?: boolean;

  // TODO: that comes to history
  description?: {
    term: string;
    amount: number;
    accepted: boolean;
    denied: boolean;
  };
}
