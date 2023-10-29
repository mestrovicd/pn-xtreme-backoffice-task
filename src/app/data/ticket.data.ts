import {Ticket, TicketBetStatus, TicketStatus} from '../models/ticket.model';

export const tickets: Ticket[] = [
  {
    id: '1',
    playerId: '3',
    createdAt: '2023-04-03T14:28:17.285Z',
    payInAmount: 10,
    payOutAmount: 290,
    currency: 'EUR',
    status: TicketStatus.Won,
    bets: [
      {
        id: '1',
        baseLine: null,
        odds: 1.45,
        sport: 'Football',
        league: 'HNL',
        market: '1x2',
        participants: ['Dinamo', 'Hajduk'],
        status: TicketBetStatus.Won,
        startAt: '2023-04-03T18:00:00.000Z'
      },
      {
        id: 'over',
        baseLine: '2.5',
        odds: 2.0,
        sport: 'Football',
        league: 'HNL',
        market: 'Total',
        participants: ['Rijeka', 'Osijek'],
        status: TicketBetStatus.Won,
        startAt: '2023-04-03T17:00:00.000Z'
      }
    ]
  },
  {
    id: '2',
    playerId: '2',
    createdAt: '2023-02-01T16:35:22.341Z',
    payInAmount: 20,
    payOutAmount: 52.2,
    currency: 'EUR',
    status: TicketStatus.Won,
    bets: [
      {
        id: '1',
        baseLine: null,
        odds: 1.8,
        sport: 'Football',
        league: 'HNL',
        market: '1x2',
        participants: ['Hajduk', 'Lokomotiva'],
        status: TicketBetStatus.Won,
        startAt: '2023-02-01T19:00:00.000Z'
      },
      {
        id: 'under',
        baseLine: '1.5',
        odds: 1.45,
        sport: 'Football',
        league: 'HNL',
        market: 'Total',
        participants: ['Varazdin', 'Rudes'],
        status: TicketBetStatus.Won,
        startAt: '2023-02-01T20:00:00.000Z'
      }
    ]
  },
  {
    id: '3',
    playerId: '1',
    createdAt: '2023-01-12T22:47:11.656Z',
    payInAmount: 30,
    payOutAmount: 54,
    currency: 'EUR',
    status: TicketStatus.Lost,
    bets: [
      {
        id: '1',
        baseLine: null,
        odds: 1.8,
        sport: 'Basketball',
        league: 'NBA',
        market: '12',
        participants: ['Miami Heat', 'Portland Trail Blazers'],
        status: TicketBetStatus.Lost,
        startAt: '2023-01-12T23:00:00.000Z'
      }
    ]
  },
  {
    id: '4',
    playerId: '1',
    createdAt: '2023-08-12T13:15:23.222Z',
    payInAmount: 6,
    payOutAmount: 18,
    currency: 'EUR',
    status: TicketStatus.Lost,
    bets: [
      {
        id: '1',
        baseLine: null,
        odds: 3.0,
        sport: 'Tennis',
        league: 'Wimbledon',
        market: '12',
        participants: ['N. Dokovic', 'R. Nadal'],
        status: TicketBetStatus.Lost,
        startAt: '2023-08-13T23:00:00.000Z'
      }
    ]
  },
  {
    id: '5',
    playerId: '3',
    createdAt: '2023-09-14T09:22:11.628Z',
    payInAmount: 50,
    payOutAmount: 200,
    currency: 'EUR',
    status: TicketStatus.Created,
    bets: [
      {
        id: 'over',
        baseLine: '92.5',
        odds: 4.0,
        sport: 'Basketball',
        league: 'WNBA',
        market: 'Total',
        participants: ['Conneticut Sun', 'Washington Mystics'],
        status: TicketBetStatus.Pending,
        startAt: '2023-08-15T23:30:00.000Z'
      }
    ]
  }
]
