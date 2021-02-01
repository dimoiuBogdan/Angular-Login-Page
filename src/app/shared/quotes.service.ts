import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  private quotes = [
    {
      quoteId: 1,
      content: 'Quote numero uno',
      author: 'Bobs',
      type: 'Educational',
    },
    {
      quoteId: 2,
      content: 'Quote numero dos',
      author: 'Tons',
      type: 'Lifestyle',
    },
    {
      quoteId: 3,
      content: 'Quote numero tres',
      author: 'Pings',
      type: 'Motivational',
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

  postQuote(content: string, author: string, type: string) {
    const quoteId = this.quotes.length + 1;
    const quote = { quoteId, content, author, type };
    this.quotes.push(quote);
  }

  quotesFiltered = new EventEmitter<string>();
  filterQuotes(type?: string) {
    const filteredQuotes = this.quotes.filter((quote) => {
      return quote.type === type;
    });
    return filteredQuotes;
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
