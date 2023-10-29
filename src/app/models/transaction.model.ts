export interface Transaction {
  id: string;
  externalId: string;
  playerId: string;
  type: TransactionType;
  direction: TransactionDirection;
  provider: TransactionProvider;
  amount: number;
  currency: string;
  createdAt: string;
}

export interface TransactionFilter {
  playerId?: string;
  externalId?: string;
  type?: TransactionType;
  provider?: TransactionProvider;
  direction?: TransactionDirection;
  createdFrom?: string;
  createdTo?: string;
}

export enum TransactionType {
  PaymentProviderWithdraw = 'PaymentProviderWithdraw',
  PaymentProviderDeposit = 'PaymentProviderDeposit',
  SportPayIn = 'SportPayIn',
  SportPayOut = 'SportPayOut',
  SportWon = 'SportWon',
  SportLost = 'SportLost'
}

export enum TransactionDirection {
  Withdraw = 'Withdraw',
  Deposit = 'Deposit',
  PayIn = 'PayIn',
  PayOut = 'PayOut',
  Won = 'Won',
  Lost = 'Lost',
}

export enum TransactionProvider {
  PaymentProvider = 'PaymentProvider',
  Sport = 'Sport'
}
