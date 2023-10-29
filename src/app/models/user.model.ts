export interface User {
  id: string;
  username: string;
  password: string;
  grants: Grant[];
}

export enum Grant {
  CanViewTickets = 'CanViewTickets',
  CanViewTransactions = 'CanViewTransactions',
}
