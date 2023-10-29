export interface Ticket {
  id: string;
  playerId: string;
  createdAt: string;
  payInAmount: number;
  payOutAmount?: number;
  currency: string;
  status: TicketStatus;
  bets: TicketBet[];
}

export interface TicketFilter {
  playerId?: string;
  status?: TicketStatus;
  createdFrom?: string;
  createdTo?: string;
}

export enum TicketStatus {
  Created = 'Created',
  Won = 'Won',
  Lost = 'Lost'
}

export interface TicketBet {
  id: string;
  baseLine?: string;
  odds: number;
  sport: string;
  league: string;
  market: string;
  participants: string[];
  status: TicketBetStatus;
  startAt: string;
}

export enum TicketBetStatus {
  Pending = 'Pending',
  Won = 'Won',
  Lost = 'Lost'
}
