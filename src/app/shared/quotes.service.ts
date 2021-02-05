import { ThrowStmt } from '@angular/compiler';
import { EventEmitter, Injectable } from '@angular/core';
import { Quote } from './quote.model';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  private quotes: Quote[] = [
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

  deleteQuote(index: number) {
    this.quotes.splice(index, 1);
  }

  public uniqueQuoteChanged = new EventEmitter<Quote>();
  getUniqueQuote(index: number) {
    this.uniqueQuoteChanged.emit(this.quotes[index]);
  }

  editUniqueQuote(
    index: number,
    content: string,
    author: string,
    type: string
  ) {
    if (content) this.quotes[index].content = content;
    if (author) this.quotes[index].author = author;
    if (type !== 'Select') this.quotes[index].type = type;
  }

  constructor() {}
}
