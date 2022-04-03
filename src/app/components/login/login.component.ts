import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/service/share-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:string;
  pass:string;
  constructor(private route: Router,
              private share: ShareDataService) { }

  ngOnInit(): void {
  }

  login() {
    this.share.changeUser(this.user);
    this.route.navigateByUrl('/');
  }
}
