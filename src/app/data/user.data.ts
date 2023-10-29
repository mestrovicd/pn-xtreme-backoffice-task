import {Grant, User} from '../models/user.model';

export const users: User[] = [
  {
    id: '1',
    username: 'void',
    password: 'void',
    grants: []
  },
  {
    id: '2',
    username: 'main',
    password: 'main',
    grants: [Grant.CanViewTickets, Grant.CanViewTransactions]
  },
  {
    id: '3',
    username: 'transactions',
    password: 'transactions',
    grants: [Grant.CanViewTransactions]
  },
  {
    id: '4',
    username: 'tickets',
    password: 'tickets',
    grants: [Grant.CanViewTickets]
  }
]
