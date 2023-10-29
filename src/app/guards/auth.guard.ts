import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { User, Grant } from '../models/user.model';
import { AlertService } from '../services/alert.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router,
    private alertService: AlertService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log('AuthGuard executed');
    const user = this.userService.getCurrentUser();
    console.log('(user was created and exists), Current User:', user);

    if (!user) {
      console.log('Navigated to login, user not found!');
      this.router.navigate(['/login']);
      return false;
    }

    const url = route.url.map((segment) => segment.path).join('/');

    if (
      (url === 'tickets' && !user.grants.includes(Grant.CanViewTickets)) ||
      ((url === 'transactions' || url.startsWith('transactions/')) &&
        !user.grants.includes(Grant.CanViewTransactions))
    ) {
      this.alertService.showAlert("You don't have access to this page");
      this.router.navigate(['/dashboard']);
      return false;
    }

    if (url === 'dashboard') {
      // Svi ulogirani useri mogu na dashboard
      return true;
    } else if (url === 'transactions' || url.startsWith('transactions/')) {
      // Samo useri sa CanViewTransactions grantom mogu na transactions page i transaction detail pages
      if (user.grants.includes(Grant.CanViewTransactions)) {
        return true;
      }
    } else if (url === 'tickets' || url.startsWith('tickets/')) {
      // Samo useri sa CanViewTickets grantom mogu na tickets page i ticket detail pages
      if (user.grants.includes(Grant.CanViewTickets)) {
        return true;
      }
    }

    this.router.navigate(['/login']);
    return false;
  }
}
