import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faTintSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../login-box/auth.service';
import { QuotesService } from '../shared/quotes.service';

@Component({
  selector: 'app-app-interface',
  templateUrl: './app-interface.component.html',
  styleUrls: ['./app-interface.component.scss'],
})
export class AppInterfaceComponent implements OnInit {
  @ViewChild('insideElement') insideElement;
  quotes = [];
  showEditModal = false;

  constructor(
    private QuotesService: QuotesService,
    private AuthService: AuthService,
    private router: Router
  ) {
    this.QuotesService.quotesFiltered.subscribe((type: string) => {
      this.quotes = this.QuotesService.filterQuotes(type);
    });
  }

  ngOnInit(): void {
    this.quotes = this.QuotesService.getQuotes();
  }

  logout() {
    this.AuthService.logout();
    this.router.navigate(['/']);
  }

  deleteQuote(index: number) {
    this.QuotesService.deleteQuote(index);
  }

  editContent(index: number) {
    this.QuotesService.getUniqueQuote(index);
  }

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: any) {
    if (this.showEditModal) {
      const clickedInside = this.insideElement.nativeElement.contains(
        targetElement
      );
      if (!clickedInside && targetElement.id !== 'edit-toggle') {
        this.showEditModal = false;
      }
    }
  }
}
