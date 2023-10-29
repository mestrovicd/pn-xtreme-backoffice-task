import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {users} from '../data/user.data';
import {WebUtils} from '../utils/web.utils';

export enum StorageKey {
  CurrentUser = 'CurrentUser'
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser: User;

  constructor() { }

  public login(username: string, password: string): Observable<User> {
    this.loadCurrentUser();
    const request = {
      username: username,
      password: password
    };
    if (this.currentUser) {
      return WebUtils.mockError('login', request, 'logged-in');
    }

    username = username.trim();
    password = password.trim();
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      this.currentUser = user;
      localStorage.setItem(StorageKey.CurrentUser, JSON.stringify(this.currentUser));
      return WebUtils.mockSuccess('login', request, this.currentUser);
    } else {
      return WebUtils.mockError('login', request, 'unknown');
    }
  }

  public logout(): Observable<any> {
    this.loadCurrentUser();
    if (!this.currentUser) {
      return WebUtils.mockError('logout', {}, 'logged-out');
    }

    this.currentUser = null;
    localStorage.removeItem(StorageKey.CurrentUser);
    return WebUtils.mockSuccess('logout', {}, 'logout-success');
  }

  public isAuthorized(): Observable<boolean> {
    this.loadCurrentUser();
    return WebUtils.mockSuccess('isAuthorized', {}, !!this.currentUser);
  }

  public getCurrentUser(): User {
    this.loadCurrentUser();
    return this.currentUser;
  }

  private loadCurrentUser(): void {
    if (!this.currentUser) {
      const currentUserString = localStorage.getItem(StorageKey.CurrentUser);
      if (currentUserString) {
        this.currentUser = JSON.parse(currentUserString);
      }
    }
  }
}
