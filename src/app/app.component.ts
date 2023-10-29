import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from './services/alert.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private alertHub: Subscription;
  constructor(
    private alertService: AlertService,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
  }

  public ngOnInit(): void {
    this.alertHub = this.alertService.alert$.subscribe((msg) => {
      window.alert(msg);
    });
  }

  public ngOnDestroy(): void {
    this.alertHub.unsubscribe();
  }
}
