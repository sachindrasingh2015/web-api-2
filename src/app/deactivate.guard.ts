import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { PostComponent } from './post/post.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<PostComponent> {
  canDeactivate():boolean {
    return window.confirm('Are you sure want to navigate?');
  }
}

