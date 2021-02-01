import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QuotesService } from '../shared/quotes.service';

@Component({
  selector: 'app-input-menu',
  templateUrl: './input-menu.component.html',
  styleUrls: ['./input-menu.component.scss'],
})
export class InputMenuComponent implements OnInit {
  content: string;
  type: string;
  author: string;
  showTypeMenu: boolean = false;
  enteredContent: boolean = false;
  allowEdit: boolean = false;

  constructor(
    private QuotesService: QuotesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const allowEditState = this.route.snapshot.queryParams.allowEdit;
    this.allowEdit = allowEditState === 'true' ? true : false;
    console.log(this.route.snapshot.queryParams.allowEdit);
  }

  postQuote() {
    this.QuotesService.postQuote(this.content, this.author, this.type);
    this.content = this.type = this.author = '';
  }

  filterQuotes(type: string) {
    this.QuotesService.filterQuotes(type);
    this.QuotesService.quotesFiltered.emit(type);
  }
}
