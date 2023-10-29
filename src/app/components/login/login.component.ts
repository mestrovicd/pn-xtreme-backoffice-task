import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  private loginSubscription: Subscription;
  loginError: string = '';

  constructor(private router: Router, private userService: UserService) {}

  login(): void {
    if (this.username.trim() === '' || this.password.trim() === '') {
      this.loginError = 'Username and password are required.';
      return;
    }

    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }

    this.loginSubscription = this.userService
      .login(this.username, this.password)
      .subscribe({
        next: (user: User) => {
          if (user) {
            console.log('user should be redirected now');
            this.router.navigate(['/dashboard']).then((success) => {
              if (!success) {
                console.error('Navigation failed!');
              }
            });
          } else {
            this.loginError = 'Incorrect login information';
          }
        },
        error: (error: any) => {
          this.loginError = 'Incorrect login information';
          console.error('Login failed:', error);
        },
      });
  }

  logout(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }

    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Logout failed:', error);
      },
    });
  }
}
