import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User, Grant } from '../../models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user: User;

  grantMapping: { [key: string]: Grant } = {
    CanViewTransactions: Grant.CanViewTransactions,
    CanViewTickets: Grant.CanViewTickets,
  };

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
  }

  hasGrant(grantName: string): boolean {
    const enumValue = this.grantMapping[grantName];
    if (enumValue !== undefined) {
      return this.user.grants.includes(enumValue);
    }
    return false;
  }

  logout(): void {
    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Logout failed:', error);
      },
    });
  }
}
