import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountAPI } from 'src/app/models/accountapi.model';
import { AccountAPIService } from 'src/app/services/accountapi.service';

@Component({

  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit{

  username: string;
  password: string;
  account: AccountAPI;

  constructor(
    private router : Router,
    private accountAPIService : AccountAPIService
  ){}

  ngOnInit(){
    
  }

  login(){

  }
  
}
