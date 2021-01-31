import { Component, OnInit } from '@angular/core';
import { Quote } from '../shared/quote.model';
import { QuotesService } from '../shared/quotes.service';

@Component({
  selector: 'app-app-interface',
  templateUrl: './app-interface.component.html',
  styleUrls: ['./app-interface.component.scss'],
})
export class AppInterfaceComponent implements OnInit {
  quotes: Quote[];

  constructor(private QuotesService: QuotesService) {}

  ngOnInit(): void {
    this.quotes = this.QuotesService.getQuotes();
  }
}
