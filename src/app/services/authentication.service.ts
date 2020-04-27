import { Injectable } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface UserI {
  name: string,
  email: string,
  password: string
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  mock_jwt_res = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UifQ.DjwRE2jZhren2Wt37t5hlVru6Myq4AhpGLiiefF69u8'
  mock_jwt_req$ = new Observable(subscriber => {
    setTimeout(() => {
      subscriber.next(this.mock_jwt_res)
      subscriber.complete()
    }, 2000)
  })
    
  
  constructor() { }

  registration(user: UserI) {
    // запрос на регистрацию (try/catch)
    console.log('Reg', user)
    return this.login(user.name, user.password)
  }

  login(name: string, password: string){
    // запрос на получения JWT токена (try/catch)
    console.log('Login', name)
    return this.mock_jwt_req$
  }

  logout(){}
}
