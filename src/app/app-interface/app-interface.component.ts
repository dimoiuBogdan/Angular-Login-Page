import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../shared/quotes.service';

@Component({
  selector: 'app-app-interface',
  templateUrl: './app-interface.component.html',
  styleUrls: ['./app-interface.component.scss'],
})
export class AppInterfaceComponent implements OnInit {
  quotes = [];

  constructor(private QuotesService: QuotesService) {
    this.QuotesService.quotesFiltered.subscribe((type: string) => {
      this.quotes = this.QuotesService.filterQuotes(type);
    });
  }

  ngOnInit(): void {
    this.quotes = this.QuotesService.getQuotes();
  }

  onFilter() {}
}
