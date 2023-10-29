import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {
  Ticket,
  TicketFilter,
  TicketStatus,
} from 'src/app/models/ticket.model';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {
  tickets: Ticket[] = [];
  filteredTickets: Ticket[] = [];
  filterForm: FormGroup;

  ticketStatuses = Object.values(TicketStatus);

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private router: Router
  ) {}

  ngOnInit() {
    this.filterForm = this.fb.group({
      playerId: [''],
      status: [''],
      createdFrom: [''],
      createdTo: [''],
    });

    this.loadTickets();
  }

  loadTickets() {
    const filters = this.filterForm.value as TicketFilter;
    this.ticketService.getTickets(filters).subscribe((tickets) => {
      this.tickets = tickets;
      this.filteredTickets = tickets;
    });
  }

  applyFilters() {
    this.loadTickets();
  }

  openTicketDetails(id: string) {
    this.router.navigate(['/tickets', id]);
  }
}
