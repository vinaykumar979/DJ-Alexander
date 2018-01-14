import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    isLoggedin: boolean = false;
    constructor() { }
    login(username: string, password: string) {
if (username === 'vinay@gmail.com' && password === '12345678') {
  return true;
} else {
return false;
}

    }

    logout() {
      this.isLoggedin = false;
    }
}
