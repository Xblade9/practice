import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { Ilogin } from '../classes/login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ls: LoginServiceService, private fb: FormBuilder) { }

  LoginForm!: FormGroup;
  formSubmitted: boolean = false;

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      email: ['', Validators.required],
      pass: ['', [Validators.required,Validators.pattern('((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15})')]]
    });
  }

  userLogin(): void {

    const payload = {
      email: this.LoginForm.controls['email'].value,
      pass: this.LoginForm.controls['pass'].value,
    }

    if (this.LoginForm.valid) {
      console.log(payload)

      this.ls.login(payload).subscribe((response: Ilogin) => {
        console.log(`${response.email} ${response.pass}`);
      });
    }
  }

}
