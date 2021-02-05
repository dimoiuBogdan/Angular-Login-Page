import { Component, OnInit } from '@angular/core';
import { Quote } from '../shared/quote.model';
import { QuotesService } from '../shared/quotes.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent implements OnInit {
  quoteDetails: Quote;
  newContent: string;
  newAuthor: string;
  newType: string = 'Select';

  constructor(private QuotesService: QuotesService) {
    this.QuotesService.uniqueQuoteChanged.subscribe((quote: Quote) => {
      this.quoteDetails = quote;
    });
  }

  confirmEdit() {
    this.QuotesService.editUniqueQuote(
      this.quoteDetails.quoteId,
      this.newContent,
      this.newAuthor,
      this.newType
    );
  }

  ngOnInit(): void {}
}
