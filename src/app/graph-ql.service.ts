import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphQlService {
  private readonly baseUrl = 'https://resume-gql.jeff-rossi.com/graphql';

  constructor(private http: HttpClient) {}

  public query<T>(options: {
    query: string;
    variables?: { [key: string]: any };
  }): Observable<T>  {
    return this.http
      .post<{ data: T }>(this.baseUrl, {
        query: options.query,
        variables: options.variables,
      })
      .pipe(map((d) => d.data));
  }

  public mutate<T>(options: {
    mutation: string;
    variables?: { [key: string]: any };
  }): Observable<any> {
    return this.http
      .post<{ data: T }>(this.baseUrl, {
        query: options.mutation,
        variables: options.variables,
      })
      .pipe(map((d) => d.data));
  }
}
