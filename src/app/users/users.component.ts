import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: string[] = [];

  userForm!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.userForm = this.fb.group({
      name: ['', Validators.required]
    });

    this.displayUsers();
  }

  addUsers() {
    const user = this.userForm.get('name')?.value;
    const newUser = this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  removeUsers(item: any) {
    const index = this.users.findIndex((ele) => ele === item);
    if (index > -1) {
      this.users.splice(index, 1);
    }
    this.save();
  }

  displayUsers() {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }
  }

  get userFormMethod() {
    return this.userForm;
  }

  save() {
    localStorage.setItem('users',JSON.stringify(this.users))
    console.log('saved');
  }
}
