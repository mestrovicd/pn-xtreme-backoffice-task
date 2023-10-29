import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Player} from '../models/player.model';
import {players} from '../data/player.data';
import {WebUtils} from '../utils/web.utils';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  public getPlayers(): Observable<Player[]> {
    return WebUtils.mockSuccess('getPlayers', {}, players);
  }
}
