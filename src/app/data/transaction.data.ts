import {Transaction, TransactionDirection, TransactionProvider, TransactionType} from '../models/transaction.model';

export const transactions: Transaction[] = [
  {
    id: '1',
    externalId: '1',
    playerId: '3',
    type: TransactionType.SportPayIn,
    direction: TransactionDirection.PayIn,
    provider: TransactionProvider.Sport,
    amount: 10,
    currency: 'EUR',
    createdAt: '2023-04-03T14:28:17.285Z'
  },
  {
    id: '2',
    externalId: '1',
    playerId: '3',
    type: TransactionType.SportPayOut,
    direction: TransactionDirection.PayOut,
    provider: TransactionProvider.Sport,
    amount: 290,
    currency: 'EUR',
    createdAt: '2023-04-03T20:00:00.000Z'
  },
  {
    id: '3',
    externalId: '1',
    playerId: '3',
    type: TransactionType.SportWon,
    direction: TransactionDirection.Won,
    provider: TransactionProvider.Sport,
    amount: 290,
    currency: 'EUR',
    createdAt: '2023-04-03T20:00:00.000Z'
  },
  {
    id: '4',
    externalId: '2',
    playerId: '2',
    type: TransactionType.SportPayIn,
    direction: TransactionDirection.PayIn,
    provider: TransactionProvider.Sport,
    amount: 20,
    currency: 'EUR',
    createdAt: '2023-02-01T16:35:22.341Z'
  },
  {
    id: '5',
    externalId: '2',
    playerId: '2',
    type: TransactionType.SportPayOut,
    direction: TransactionDirection.PayOut,
    provider: TransactionProvider.Sport,
    amount: 52.2,
    currency: 'EUR',
    createdAt: '2023-02-01T22:00:00.000Z'
  },
  {
    id: '6',
    externalId: '2',
    playerId: '2',
    type: TransactionType.SportWon,
    direction: TransactionDirection.Won,
    provider: TransactionProvider.Sport,
    amount: 52.2,
    currency: 'EUR',
    createdAt: '2023-02-01T22:00:00.000Z'
  },
  {
    id: '7',
    externalId: '3',
    playerId: '1',
    type: TransactionType.SportPayIn,
    direction: TransactionDirection.PayIn,
    provider: TransactionProvider.Sport,
    amount: 30,
    currency: 'EUR',
    createdAt: '2023-01-12T22:47:11.656Z'
  },
  {
    id: '8',
    externalId: '3',
    playerId: '1',
    type: TransactionType.SportLost,
    direction: TransactionDirection.Lost,
    provider: TransactionProvider.Sport,
    amount: 0,
    currency: 'EUR',
    createdAt: '2023-01-13T02:00:00.000Z'
  },
  {
    id: '9',
    externalId: '4',
    playerId: '1',
    type: TransactionType.SportPayIn,
    direction: TransactionDirection.PayIn,
    provider: TransactionProvider.Sport,
    amount: 6,
    currency: 'EUR',
    createdAt: '2023-08-12T13:15:23.222Z'
  },
  {
    id: '10',
    externalId: '4',
    playerId: '1',
    type: TransactionType.SportLost,
    direction: TransactionDirection.Lost,
    provider: TransactionProvider.Sport,
    amount: 0,
    currency: 'EUR',
    createdAt: '2023-08-14T02:00:00.000Z'
  },
  {
    id: '11',
    externalId: '5',
    playerId: '3',
    type: TransactionType.SportPayIn,
    direction: TransactionDirection.PayIn,
    provider: TransactionProvider.Sport,
    amount: 50,
    currency: 'EUR',
    createdAt: '2023-09-14T09:22:11.628Z'
  },
  {
    id: '12',
    externalId: '5430',
    playerId: '3',
    type: TransactionType.PaymentProviderDeposit,
    direction: TransactionDirection.Deposit,
    provider: TransactionProvider.PaymentProvider,
    amount: 150,
    currency: 'EUR',
    createdAt: '2023-06-07T19:12:34.634Z'
  },
  {
    id: '13',
    externalId: '8447',
    playerId: '1',
    type: TransactionType.PaymentProviderWithdraw,
    direction: TransactionDirection.Withdraw,
    provider: TransactionProvider.PaymentProvider,
    amount: 10,
    currency: 'EUR',
    createdAt: '2023-03-11T12:00:03.112Z'
  },
  {
    id: '14',
    externalId: '8447',
    playerId: '2',
    type: TransactionType.PaymentProviderDeposit,
    direction: TransactionDirection.Deposit,
    provider: TransactionProvider.PaymentProvider,
    amount: 72,
    currency: 'EUR',
    createdAt: '2023-09-23T10:32:15.333Z'
  },
  {
    id: '15',
    externalId: '2394',
    playerId: '2',
    type: TransactionType.PaymentProviderWithdraw,
    direction: TransactionDirection.Withdraw,
    provider: TransactionProvider.PaymentProvider,
    amount: 12,
    currency: 'EUR',
    createdAt: '2023-10-03T15:17:44.123Z'
  }
];
