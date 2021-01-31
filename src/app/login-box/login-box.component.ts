import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuotesService } from '../shared/quotes.service';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss'],
})
export class LoginBoxComponent implements OnInit {
  username: string;
  password: string;
  isEmpty = [false, false];

  constructor(private router: Router, private QuoteService: QuotesService) {}

  ngOnInit(): void {}

  goAsGuest() {
    this.router.navigate(['/app'], {
      queryParams: { allowEdit: '0' },
      fragment: 'guest',
    });
  }

  goAsUser() {
    this.router.navigate(['/app'], {
      queryParams: { allowEdit: '1' },
      fragment: this.username,
    });
  }

  login() {
    !this.username ? (this.isEmpty[0] = true) : (this.isEmpty[0] = false);
    !this.password ? (this.isEmpty[1] = true) : (this.isEmpty[1] = false);
    !this.username || this.password
      ? setTimeout(() => {
          this.isEmpty[1] = this.isEmpty[0] = false;
        }, 3000)
      : null;
    if (this.QuoteService.checkAccount(this.username, this.password) === true)
      this.goAsUser();
    else if (this.username && this.password)
      confirm('The credentials do not match');
  }
}
