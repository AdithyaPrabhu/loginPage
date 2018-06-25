import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { NewUser } from './login.model';


@Injectable()
export class LoginService {
    constructor(private httpClient: HttpClient) { }
    public verifyUser(username: string, password: string): Observable<boolean> {
        if (username && password) {
            return this.httpClient.get<boolean>('http://localhost:8080/api/login/' + username + '/' + password);
        }
        return new Observable<boolean>((observer) => {
            observer.next(false);
            observer.complete();
        });
    }

    public createNewUser(username: string, password: string): Observable<boolean> {
        if (username && password) {
            const  newUser = new NewUser();
            newUser.userId = username;
            newUser.password = password;
            return this.httpClient.post<boolean>('http://localhost:8080/api/newUser/' , newUser);
        }
        return new Observable<boolean>((observer) => {
            observer.next(false);
            observer.complete();
        });
    }
}
