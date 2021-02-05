import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../login-box/auth.service';
import { QuotesService } from '../shared/quotes.service';

@Component({
  selector: 'app-app-interface',
  templateUrl: './app-interface.component.html',
  styleUrls: ['./app-interface.component.scss'],
})
export class AppInterfaceComponent implements OnInit {
  @ViewChild('insideElement') insideElement: ElementRef;
  quotes = [];
  showEditModal = false;
  loggedIn: boolean = false;

  constructor(
    private QuotesService: QuotesService,
    private AuthService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.QuotesService.quotesFiltered.subscribe((type: string) => {
      this.quotes = this.QuotesService.filterQuotes(type);
    });
  }

  ngOnInit(): void {
    const loggedIn = this.route.snapshot.queryParams.allowEdit;
    this.loggedIn = loggedIn === 'true' ? true : false;
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
