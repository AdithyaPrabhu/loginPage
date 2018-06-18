import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
    constructor(private httpClient: HttpClient) { }
    public verifyUser(username: string, password: string): Observable<boolean>{
        return this.httpClient.get<boolean>('http://localhost:8080/api/login/prabhu.adithya/HelloWorld');
    }
}