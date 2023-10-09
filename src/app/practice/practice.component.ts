import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ThemePalette } from '@angular/material/core';
import { SaveAddressService } from '../services/save-address.service';
import { Address } from '../classes/address';
import { MatDialog } from '@angular/material/dialog';
import { AlertdialogboxComponent } from '../alertdialogbox/alertdialogbox.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  constructor(private fb: FormBuilder, private add: SaveAddressService, private dialog: MatDialog, private router: Router) { }
  addressForm!: FormGroup;
  isaddHome: boolean = false;
  isaddDiff: boolean = false;
  color: ThemePalette = 'warn';
  idcount: number = 0;
  ngOnInit(): void {
    this.addressForm = this.fb.group({
      address1: ['', Validators.required],
      address2: [''],
      addressType: ['home', Validators.required],
      applicantName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      fatherName: ['', Validators.required],
      isSameAdd: [''],
      isDiffAdd: [''],
    });
    this.defaultForm();
  }

  onSubmit(payload: {
    id: number, add1: string, add2: string, addType: string,
    appname: string, dob: string, fname: string, is_add_same: boolean, is_add_diff: boolean
  }): void {
    if (this.addressForm.valid) {
      this.add.saveAddress(payload).subscribe((res: Address) => {
        console.log(res);
      });
      this.dialog.open(AlertdialogboxComponent, {
        width: '400px',
        data: { message: "data is submitted." }
      }).afterClosed().subscribe(() => this.router.navigate(['']));
    }
  }

  homeAddress(event: MatCheckboxChange): void {
    if (event.checked) {
      this.isaddHome = true;
      this.isaddDiff = false;
      this.enableForm();
      this.addressForm.setValue({
        address1: 'Hno-1', address2: 'Delhi', applicantName: 'Bruce Wayne',
        dateOfBirth: '1993-01-01', fatherName: 'Thomas Wayne', addressType: 'work', isSameAdd: true, isDiffAdd: false
      });
    }
    else {
      this.defaultForm();
      this.isaddHome = !this.isaddHome;
      this.addressForm.reset();
      this.addressForm.patchValue({ addressType: 'home' });
    }
  }

  differentAddress(event: MatCheckboxChange): void {
    if (event.checked) {
      this.isaddHome = false;
      this.isaddDiff = true;
      this.enableForm();
      this.addressForm.reset();
      this.addressForm.patchValue({ addressType: 'other' });
    }
    else {
      this.defaultForm();
      this.isaddDiff = !this.isaddDiff;
      this.addressForm.reset();
      this.addressForm.patchValue({ addressType: 'home' });
    }
  }

  defaultForm(): void {
    this.addressForm.controls['address1'].disable();
    this.addressForm.controls['address2'].disable();
    this.addressForm.controls['addressType'].disable();
    this.addressForm.controls['applicantName'].disable();
    this.addressForm.controls['dateOfBirth'].disable();
    this.addressForm.controls['fatherName'].disable();
  }

  enableForm(): void {
    this.addressForm.controls['address1'].enable();
    this.addressForm.controls['address2'].enable();
    this.addressForm.controls['addressType'].enable();
    this.addressForm.controls['applicantName'].enable();
    this.addressForm.controls['dateOfBirth'].enable();
    this.addressForm.controls['fatherName'].enable();
  }
}


