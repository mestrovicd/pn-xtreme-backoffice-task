import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {
  Transaction,
  TransactionType,
  TransactionDirection,
  TransactionProvider,
} from 'src/app/models/transaction.model';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];
  filterForm: FormGroup;

  transactionTypes = Object.values(TransactionType);
  transactionDirections = Object.values(TransactionDirection);
  transactionProviders = Object.values(TransactionProvider);

  typeAggregations: { [key: string]: number } = {};

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    this.filterForm = this.fb.group({
      playerId: [''],
      externalId: [''],
      type: [''],
      direction: [''],
      provider: [''],
      createdFrom: [''],
      createdTo: [''],
    });

    this.loadTransactions();
  }

  loadTransactions() {
    this.transactionService.getTransactions({}).subscribe((transactions) => {
      this.transactions = transactions;
      this.filteredTransactions = transactions;
      this.calculateTypeAggregations();
    });
  }

  applyFilters() {
    const filters = this.filterForm.value;
    this.filteredTransactions = this.transactions.filter((transaction) => {
      return (
        (!filters.playerId ||
          transaction.playerId.includes(filters.playerId)) &&
        (!filters.externalId ||
          transaction.externalId.includes(filters.externalId)) &&
        (!filters.type || transaction.type === filters.type) &&
        (!filters.direction || transaction.direction === filters.direction) &&
        (!filters.provider || transaction.provider === filters.provider) &&
        (!filters.createdFrom ||
          new Date(transaction.createdAt) >= new Date(filters.createdFrom)) &&
        (!filters.createdTo ||
          new Date(transaction.createdAt) <= new Date(filters.createdTo))
      );
    });
    this.calculateTypeAggregations();
  }

  calculateTypeAggregations() {
    this.transactionTypes.forEach((type) => {
      this.typeAggregations[type] = 0;
    });

    this.filteredTransactions.forEach((transaction) => {
      if (this.typeAggregations.hasOwnProperty(transaction.type)) {
        this.typeAggregations[transaction.type] += transaction.amount;
      }
    });
  }

  openTransactionDetails(id: string) {
    this.router.navigate(['/transactions', id]);
  }
}
