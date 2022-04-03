import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private userSource = new BehaviorSubject<string>('')
  currentUser = this.userSource.asObservable();
  constructor() { }

  changeUser(user: string) {
    this.userSource.next(user);
  }
}
