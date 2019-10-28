import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {User} from './user';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl, this.httpOptions)
      .pipe(
        tap(heroes => console.log('fetched users')),
        catchError(this.handleError('getuser', []))
      );
  }

  getUser(id: number): Observable<User> {
    const url = `${this.apiUrl}?id=${id}`;
    return this.httpClient.get<User>(url).pipe(
      tap(_ => console.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  //
  // addUser(user: User): Observable<User> {
  //   return this.httpClient.post<User>(`${this.apiUrl}`, user, this.httpOptions).pipe(
  //     tap(() => console.log(`added useris id=${user.id}`)),
  //     catchError(this.handleError<User>('addUser'))
  //   );
  // }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
