import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './auth/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  authticated$: Observable<boolean>;
  user$!: Observable<User>;

  constructor(private authService: AuthService){
    this.authticated$ = this.authService.isAuthenticated();
    this.user$ = this.authService.getUser();
  }

}
