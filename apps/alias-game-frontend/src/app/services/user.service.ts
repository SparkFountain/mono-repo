import { Injectable } from '@angular/core';
import { User } from '@spark-fountain/alias-game';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: User;

  constructor() {}

  setUser(user: User): void {
    this.user = user;
  }

  getUser(): User {
    return this.user;
  }
}
