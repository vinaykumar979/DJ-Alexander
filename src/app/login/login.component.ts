import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myform: FormGroup;
  email: FormControl;
  password: FormControl;
  loginError: boolean = false;
  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
  }

  createForm() {
    this.myform = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  onSubmit() {
    if (this.myform.valid) {
      const email = this.myform.get('email').value;
      const password = this.myform.get('password').value;

      if (this._authService.login(email, password)) {
        this._authService.isLoggedin = true;
        this.loginError = false;
        this.router.navigate(['/aboutus']);
      } else {
        this._authService.isLoggedin = false;
        this.loginError = true;
        console.log('Invalid user name or password');
        return false;
      }

    }
  }

}

