import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from 'src/app/models/transaction.model';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss'],
})
export class TransactionDetailComponent implements OnInit {
  transaction: Transaction | undefined;

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    const transactionId = this.route.snapshot.paramMap.get('id');
    if (transactionId) {
      this.loadTransactionDetails(transactionId);
    }
  }

  loadTransactionDetails(transactionId: string) {
    this.transactionService.getTransaction(transactionId).subscribe(
      (transaction) => {
        this.transaction = transaction;
      },
      (error) => {
        console.error('Error loading transaction details:', error);
      }
    );
  }
}
