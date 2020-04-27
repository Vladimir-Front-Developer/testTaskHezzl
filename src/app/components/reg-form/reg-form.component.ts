import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss'],
  animations: [
    trigger('load', [
      state('start', style({
        width: '125px'
      })),
      state('end', style({
        width: '40px'
      })),
      transition('start => end', [
        animate('0.5s')
      ]),
      transition('end => start', [
        animate('0.5s')
      ])
    ])
  ]
})

export class RegFormComponent implements OnInit, OnDestroy {
  regForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/(?=.*[A-Z]).{6,}/)])
  })
  get name() { return this.regForm.get('name') }
  get email() { return this.regForm.get('email') }
  get password() { return this.regForm.get('password') }
  supMsgName: string
  supMsgEmail: string
  supMsgPassword: string
  isLoad: boolean = false
  isDisabledSignIn: boolean = false
  private subscribtion$: Subscription = new Subscription()
  
  constructor(
    private router: Router,
    private authS: AuthenticationService) {  }

  ngOnInit() {
    this.getSupMsgName()
    this.getSupMsgEmail()
    this.getSupMsgPassword()
    this.subscribtion$.add(this.name.valueChanges.subscribe(() => this.getSupMsgName()))
    this.subscribtion$.add(this.email.valueChanges.subscribe(() => this.getSupMsgEmail()))
    this.subscribtion$.add(this.password.valueChanges.subscribe(() => this.getSupMsgPassword()))
  }

  getSupMsgName(){
    this.supMsgName = !this.name.value
    ? 'Подсказка: Введите ваше имя' : !this.name.valid
    ? 'Имя должно состоять из 6 символов' : ''
  }

  getSupMsgEmail(){
    this.supMsgEmail = !this.email.value
    ? 'Подсказка: Введите ваш email' : !this.email.valid
    ? 'Email должен содержать @ и .' : ''
  }

  getSupMsgPassword(){
    this.supMsgPassword = !this.password.value
      ? 'Подсказка: Введите ваш пароль' :  !this.password.valid
      ? 'Пароль должен состоять из 6 символов и заглавной буквы' : ''
  }

  signIn(){
    if(!this.isDisabledSignIn) {
      this.isLoad = !this.isLoad
      this.isDisabledSignIn = !this.isDisabledSignIn
      this.authS.registration(this.regForm.value)
      .subscribe(jwt => {
        console.log('GET JWT', jwt)
        localStorage.setItem('userJWT', JSON.stringify(jwt)) // вынеси в сервис
        this.router.navigate(['/account'])
      }, error => {
        console.error(error)
        this.isLoad = !this.isLoad
        this.isDisabledSignIn = !this.isDisabledSignIn
      })
    }
  }

  ngOnDestroy(): void {
    this.subscribtion$.unsubscribe()
  }

}
