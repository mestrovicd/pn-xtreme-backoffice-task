import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketService } from 'src/app/services/ticket.service';
import { Transaction } from 'src/app/models/transaction.model';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss'],
})
export class TicketDetailComponent implements OnInit {
  ticket: Ticket;
  linkedTransactions: Transaction[] = [];
  showLinkedTransactions: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const ticketId = params.get('id');
      if (ticketId) {
        this.loadTicketDetails(ticketId);
      }
    });
  }

  loadTicketDetails(ticketId: string) {
    this.ticketService.getTicket(ticketId).subscribe((ticket) => {
      this.ticket = ticket;
    });
  }

  loadLinkedTransactions() {
    this.transactionService
      .getTransactions({ externalId: this.ticket.id })
      .subscribe(
        (transactions) => {
          this.linkedTransactions = transactions;
          this.showLinkedTransactions = true;
        },
        (error) => {
          console.error('Error loading linked transactions:', error);
        }
      );
  }
}
