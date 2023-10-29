import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private userService: UserService,
    private router: Router,
    private translate: TranslateService
  ) {}

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  isUserLoggedIn(): boolean {
    return !!this.userService.getCurrentUser();
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
