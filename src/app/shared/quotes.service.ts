import { Injectable } from '@angular/core';
import { Quote } from './quote.model';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  private quotes: Quote[] = [
    {
      id: 1,
      content:
        'When you think you are done, remember, you are only at your 40%',
      author: 'Bobita',
      type: 'Motivational',
    },
    {
      id: 2,
      content: 'Flai flai batarflai',
      author: 'Deni',
      type: 'Lifestyle',
    },
    {
      id: 3,
      content: 'Ami plake penis',
      author: 'Pingu',
      type: 'Educational',
    },
  ];
  private accounts = [
    {
      username: 'user1',
      password: 'pass1',
    },
    {
      username: 'user2',
      password: 'pass2',
    },
    {
      username: 'user3',
      password: 'pass3',
    },
  ];

  getQuotes() {
    return this.quotes;
  }

  checkAccount(username: string, password: string): boolean {
    let match: boolean = false;
    this.accounts.forEach((account) => {
      if (account.password === password && account.username === username)
        match = true;
    });
    return match;
  }

  constructor() {}
}
