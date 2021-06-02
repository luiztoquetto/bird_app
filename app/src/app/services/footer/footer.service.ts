import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { FooterState } from 'src/app/models/enums/footer-state';

@Injectable({
  providedIn: 'root'
})

export class FooterService {
  constructor( private readonly router: Router ) {
    this.router.events.subscribe( () => {
      const currentUrl = this.router.url;

      if(currentUrl.startsWith('/main/categories')){
        return void this.selectedFooterSubject.next(FooterState.CATEGORIES);
      }

      if(currentUrl.startsWith('/main/my-comments')){
        return void this.selectedFooterSubject.next(FooterState.MY_COMMENTS);
      }

      if(currentUrl.startsWith('/main/all-comments')){
        return void this.selectedFooterSubject.next(FooterState.ALL_COMMENTS);
      }
    });
  }

  private readonly selectedFooterSubject: BehaviorSubject<FooterState> = new BehaviorSubject<FooterState>(FooterState.CATEGORIES);

  public getCurrentSelectedFooter$(): Observable<FooterState> {
    return this.selectedFooterSubject.asObservable();
  }
}
