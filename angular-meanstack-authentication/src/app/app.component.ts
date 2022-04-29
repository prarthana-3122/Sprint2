import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-meanstack-authentication';
  constructor(public authService:AuthService){}

  logout()
  {
    this.authService.doLogout();
  }
}
