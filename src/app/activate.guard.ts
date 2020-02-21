import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
  constructor(private bookservice: BookService, private route:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  if(this.bookservice.isAdminrights()){
    return false;
  }
  else{
    alert('you are not elegible to acces it, Redirecting to Home component');
    this.route.navigate(['home']);
  }
  }

}
