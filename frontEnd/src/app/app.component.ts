import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { debounce } from 'rxjs/operators/debounce';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string;
  password: string;
  apiMessage: string;
  constructor(private loginService: LoginService) { }

  onSubmit(): void {
    console.log(this.username);
    console.log(this.password);
    this.loginService.verifyUser(this.username, this.password).subscribe(apiReposnse => {
      this.apiMessage = '';
      console.log(apiReposnse);

      if (!apiReposnse) {
        this.apiMessage = 'Userid / Password incorrect';
      }
    });

  }

}
