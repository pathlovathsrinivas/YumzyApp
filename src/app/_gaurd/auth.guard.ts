import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationServiceService } from '../_service/authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private authenticationService: AuthenticationServiceService) {
}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
const currentUser = sessionStorage.getItem('token')
console.log('currentUser',currentUser)
if (currentUser) {
// authorised so return true
return true;
}
else{
// not logged in so redirect to login page with the return url
this.router.navigate(['']);
return false;
}
}
  
}
