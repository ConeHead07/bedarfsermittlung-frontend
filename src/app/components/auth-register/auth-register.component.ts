import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss']
})
export class AuthRegisterComponent implements OnInit {

  User: any = ['Super Admin', 'Author', 'Reader'];

  constructor() { }

  ngOnInit(): void {
  }

}
