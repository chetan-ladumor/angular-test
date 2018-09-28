import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }
  
  canActivate() {
    if(this.authService.currentUser && this.authService.currentUser.admin) return true;
    
    this.router.navigate(['/no-access']);
    return false;
  }

}
