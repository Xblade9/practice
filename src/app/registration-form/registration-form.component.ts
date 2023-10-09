import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { RegisterService } from '../services/register-service';
import { Register } from '../classes/register';
import { MatDialog } from '@angular/material/dialog';
import { AlertdialogboxComponent } from '../alertdialogbox/alertdialogbox.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private reg: RegisterService, private dialog: MatDialog, private router: Router) { }

  registerForm!: FormGroup;

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  register(payload: { firstName: string, lastName: string, email: string, password: string }) {
    if (this.registerForm.valid) {
      this.reg.register(payload).subscribe((Response: Register) => {
        this.openSuccessDialog();
      })
    }
  }

  openSuccessDialog(): void {
    this.dialog.open(AlertdialogboxComponent, {
      width: '400px',
      data: { message: 'User registered successfully!' },
    }).afterClosed().subscribe(() => this.router.navigate(['/login']));
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
